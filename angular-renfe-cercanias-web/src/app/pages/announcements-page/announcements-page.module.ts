import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from "primeng/dropdown";
import { CardModule } from 'primeng/card';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';


import { AnnouncementsPageComponent } from './announcements-page.component';


@NgModule({
  declarations: [
    AnnouncementsPageComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    CardModule,
    LoadingSpinnerModule
  ]
})
export class AnnouncementsPageModule { }
