import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AnnouncementsPageComponent } from './pages/announcements-page/announcements-page.component';
import { CustomerServicePageComponent } from './pages/customer-service-page/customer-service-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsInfoPageComponent } from './pages/news-info-page/news-info-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { StationInfoPageComponent } from './pages/station-info-page/station-info-page.component';
import { TrainFaresPageComponent } from './pages/train-fares-page/train-fares-page.component';
import { TrainLinesPageComponent } from './pages/train-lines-page/train-lines-page.component';
import { TravelWithPageComponent } from './pages/travel-with-page/travel-with-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomePageComponent
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
    component: AccountPageComponent
  },
  {
    path: 'nucleos',
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
        component: TrainFaresPageComponent
      },
      {
        path: 'atencion-cliente',
        component: CustomerServicePageComponent
      }
    ]
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
