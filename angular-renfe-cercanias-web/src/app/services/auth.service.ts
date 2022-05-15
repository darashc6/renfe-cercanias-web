import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn?: User; // Save logged in user data
  _isUserLoggedIn: Subject<boolean> = new Subject();
  private isUserLoggedIn: boolean = false;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private messageService: MessageService
  ) {

    /**
     * Saving user data in localstorage when logged in and setting up null when logged out
     */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isUserLoggedIn = true;
        this._isUserLoggedIn.next(this.isUserLoggedIn);

        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user?.uid}`);

        userRef.valueChanges().subscribe(user => {
          this.userLoggedIn = user;
        })
      } else {
        this.isUserLoggedIn = false
        this._isUserLoggedIn.next(this.isUserLoggedIn);
        this.userLoggedIn = undefined;
      }
    })

  }

  /**
   * Sign in with email and password
   * @param email User email
   * @param password Password associated with the email
   */
  async signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.isUserLoggedIn = true
        this._isUserLoggedIn.next(this.isUserLoggedIn);

        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${result.user?.uid}`);

        userRef.valueChanges().subscribe(user => {
          this.userLoggedIn = user;

          this.router.navigate(['perfil'])
        })
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage: Message = {
          severity: 'error',
          summary: 'Error',
          life: 2500
        }

        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage['detail'] = "Introduzca un correo electrónico válido"
            break;
          case 'auth/invalid-email':
            errorMessage['detail'] = "Introduzca un correo electrónico válido"
            break;
          case 'auth/user-not-found':
            errorMessage['detail'] = "El correo electrónico introducido no existe"
            break;
          default:
            errorMessage['detail'] = "Email/Contraseña introducidos incorrectamente"
            break;
        }

        this.messageService.add(errorMessage);
      })
  }

  /**
   * Sign up with email and password
   * @param email 
   * @param password 
   */
  async signUp(newUser: User) {
    return this.afAuth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((result) => {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${result.user?.uid}`)

        userRef.set(newUser)
          .then(() => {
            this.router.navigate(['perfil']);
          });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage: Message = {
          severity: 'error',
          summary: 'Error',
          life: 2500
        }

        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage['detail'] = "El correo electrónico introducido ya esta en uso. Por favor, introduzca otro."
            break;
          case 'auth/invalid-email':
            errorMessage['detail'] = "El correo electrónico introducido no es válido."
            break;
          case 'auth/weak-password':
            errorMessage['detail'] = "El correo electrónico introducido ya esta en uso. Por favor, introduzca otro."
            break;
          default:
            break;
        }

        this.messageService.add(errorMessage);
      })
  }

  /**
   * Sign out
   */
  async signOut() {
    return this.afAuth.signOut().then(() => {
      this.userLoggedIn = undefined;
      this.isUserLoggedIn = false;
      this._isUserLoggedIn.next(this.isUserLoggedIn);
      this.router.navigate(['cuenta']);
    })
  }

  // Returns true when user is logged in
  get isLoggedIn(): boolean {
    return this.isUserLoggedIn && this.userLoggedIn !== undefined;
  }

  updateUser(updatedUser: User) {
    this.afAuth.currentUser
      .then((firebaseUser) => {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${firebaseUser?.uid}`);

        userRef.set(updatedUser, {
          merge: true
        }).then(() => {
          this.messageService.add({ severity: 'success', summary: 'Usuario actualizado', detail: 'Usuario actualizado correctamente', life: 2500 });
        })
      });
  }
}
