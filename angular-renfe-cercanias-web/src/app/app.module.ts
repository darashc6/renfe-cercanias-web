import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from "primeng/carousel";
import { IconModule } from '@visurel/iconify-angular';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroIlustrationInfoComponent } from './components/intro-ilustration-info/intro-ilustration-info.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { StationCarrouselComponent } from './components/station-carrousel/station-carrousel.component';
import { NewAppSectionComponent } from './components/new-app-section/new-app-section.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IntroIlustrationInfoComponent,
    IntroSectionComponent,
    StationCarrouselComponent,
    NewAppSectionComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
