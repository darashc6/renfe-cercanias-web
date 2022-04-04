import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "primeng/carousel";
import { IconModule } from '@visurel/iconify-angular';
import { ButtonModule } from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from "primeng/inputtext";

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



import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewAppInfoItemComponent } from './components/new-app-info-item/new-app-info-item.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
