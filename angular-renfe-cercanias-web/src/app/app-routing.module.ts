import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AnnouncementsPageComponent } from './pages/announcements-page/announcements-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsInfoPageComponent } from './pages/news-info-page/news-info-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { StationInfoPageComponent } from './pages/station-info-page/station-info-page.component';

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
    component: StationInfoPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
