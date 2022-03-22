import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "primeng/carousel";
import { IconModule } from '@visurel/iconify-angular';
import { ButtonModule } from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from "primeng/inputtext";
import { HomePageModule } from './pages/home-page/home-page.module';
import { NewsPageModule } from './pages/news-page/news-page.module';



import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewAppInfoItemComponent } from './components/new-app-info-item/new-app-info-item.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { NewsInfoPageModule } from './pages/news-info-page/news-info-page.module';
import { StationInfoPageModule } from './pages/station-info-page/station-info-page.module';
import { AnnouncementsPageModule } from './pages/announcements-page/announcements-page.module';
import { TravelWithPageModule } from './pages/travel-with-page/travel-with-page.module';

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
    StationInfoPageModule,
    AnnouncementsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
