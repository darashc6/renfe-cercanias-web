import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { CarouselModule } from "primeng/carousel";
import { IconModule } from '@visurel/iconify-angular';
import { ButtonModule } from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";



import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroIlustrationInfoComponent } from './components/intro-ilustration-info/intro-ilustration-info.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { StationCarrouselComponent } from './components/station-carrousel/station-carrousel.component';
import { NewAppSectionComponent } from './components/new-app-section/new-app-section.component';
import { NewAppInfoItemComponent } from './components/new-app-info-item/new-app-info-item.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SearchTrainTimingsSectionComponent } from './components/search-train-timings-section/search-train-timings-section.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IntroIlustrationInfoComponent,
    IntroSectionComponent,
    StationCarrouselComponent,
    NewAppSectionComponent,
    NewAppInfoItemComponent,
    NavigationBarComponent,
    SearchTrainTimingsSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    CalendarModule,
    FormsModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
