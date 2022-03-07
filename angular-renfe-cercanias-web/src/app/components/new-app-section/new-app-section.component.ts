import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-app-section',
  templateUrl: './new-app-section.component.html',
  styleUrls: ['./new-app-section.component.scss']
})
export class NewAppSectionComponent implements OnInit {
  newAppInfo: any[] = [
    {
      icon: 'customer-service',
      title: 'Atencion al cliente'
    },
    {
      icon: 'qr-code',
      title: 'Billetes en tu teléfono'
    },
    {
      icon: 'heart-pulse',
      title: 'Información COVID-19'
    },
    {
      icon: 'notifications',
      title: 'Actualizaciones y notificaciones'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
