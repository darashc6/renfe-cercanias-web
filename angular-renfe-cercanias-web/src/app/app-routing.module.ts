import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AccountRegistrationPageComponent } from './pages/account-registration-page/account-registration-page.component';
import { AnnouncementsPageComponent } from './pages/announcements-page/announcements-page.component';
import { CustomerServiceFormPageComponent } from './pages/customer-service-form-page/customer-service-form-page.component';
import { CustomerServicePageComponent } from './pages/customer-service-page/customer-service-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsInfoPageComponent } from './pages/news-info-page/news-info-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { StationInfoPageComponent } from './pages/station-info-page/station-info-page.component';
import { TrainFareDetailsPageComponent } from './pages/train-fare-details-page/train-fare-details-page.component';
import { TrainFaresPageComponent } from './pages/train-fares-page/train-fares-page.component';
import { TrainLinesPageComponent } from './pages/train-lines-page/train-lines-page.component';
import { TravelWithPageComponent } from './pages/travel-with-page/travel-with-page.component';
import { BuyTicketPageComponent } from './pages/buy-ticket-page/buy-ticket-page.component';
import { AuthGuard } from './guard/auth.guard';
import { AccountGuard } from './guard/account.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomePageComponent,
  },
  {
    path: 'noticias',
    children: [
      {
        path: '',
        component: NewsPageComponent
      },
      {
        path: ':id',
        component: NewsInfoPageComponent
      }
    ]
  },
  {
    path: 'avisos',
    component: AnnouncementsPageComponent
  },
  {
    path: 'cuenta',
    component: AccountPageComponent,
    canActivate: [AccountGuard]
  },
  {
    path: 'registro',
    component: AccountRegistrationPageComponent
  },
  {
    path: 'perfil',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nucleos/:rail-network-id',
    children: [
      {
        path: '',
        component: StationInfoPageComponent
      },
      {
        path: 'viajar-con',
        component: TravelWithPageComponent
      },
      {
        path: 'lineas',
        component: TrainLinesPageComponent
      },
      {
        path: 'tarifas',
        children: [
          {
            path: '',
            component: TrainFaresPageComponent
          },
          {
            path: ':fare-id',
            component: TrainFareDetailsPageComponent
          }
        ]
      },
      {
        path: 'atencion-cliente',
        children: [
          {
            path: '',
            component: CustomerServicePageComponent
          },
          {
            path: 'contactar-con-cercanias',
            component: CustomerServiceFormPageComponent
          }
        ]
      },
    ]
  },
  {
    path: 'comprar-billete',
    component: BuyTicketPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
