import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { PrimeNGConfig } from 'primeng/api';
import { appIcons } from './icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private iconService: IconService, private primengConfig: PrimeNGConfig) {
    iconService.registerAll(appIcons);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
