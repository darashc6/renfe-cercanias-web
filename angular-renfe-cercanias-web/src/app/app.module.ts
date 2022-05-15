import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "primeng/carousel";
import { IconModule } from '@visurel/iconify-angular';
import { ButtonModule } from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { SidebarModule } from "primeng/sidebar";
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

import { HomePageModule } from './pages/home-page/home-page.module';
import { NewsPageModule } from './pages/news-page/news-page.module';
import { NewsInfoPageModule } from './pages/news-info-page/news-info-page.module';
import { StationInfoPageModule } from './pages/station-info-page/station-info-page.module';
import { AnnouncementsPageModule } from './pages/announcements-page/announcements-page.module';
import { TravelWithPageModule } from './pages/travel-with-page/travel-with-page.module';
import { TrainFaresPageModule } from './pages/train-fares-page/train-fares-page.module';
import { TrainFareDetailsPageModule } from './pages/train-fare-details-page/train-fare-details-page.module';
import { CustomerServicePageModule } from './pages/customer-service-page/customer-service-page.module';
import { CustomerServiceFormPageModule } from './pages/customer-service-form-page/customer-service-form-page.module';
import { TrainLinesPageModule } from './pages/train-lines-page/train-lines-page.module';
import { AccountPageModule } from './pages/account-page/account-page.module';
import { AccountRegistrationPageModule } from './pages/account-registration-page/account-registration-page.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { BuyTicketPageModule } from './pages/buy-ticket-page/buy-ticket-page.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewAppInfoItemComponent } from './components/new-app-info-item/new-app-info-item.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewAppInfoItemComponent,
    NavigationBarComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    IconModule,
    AppRoutingModule,
    HomePageModule,
    HttpClientModule,
    DialogModule,
    SidebarModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'renfe-cercanias'),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    Title,
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
