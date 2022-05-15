import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from "primeng/calendar";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';

import { IntroIlustrationInfoComponent } from 'src/app/components/intro-ilustration-info/intro-ilustration-info.component';
import { SearchTrainTimingsSectionComponent } from 'src/app/components/search-train-timings-section/search-train-timings-section.component';


@NgModule({
  declarations: [
    IntroIlustrationInfoComponent,
    SearchTrainTimingsSectionComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    RippleModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    IntroIlustrationInfoComponent,
    SearchTrainTimingsSectionComponent
  ]
})
export class HomePageModule { }
