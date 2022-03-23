import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/Announcement';
import { Station } from 'src/app/models/Station';

@Component({
  selector: 'app-announcements-page',
  templateUrl: './announcements-page.component.html',
  styleUrls: ['./announcements-page.component.scss']
})
export class AnnouncementsPageComponent implements OnInit {
  stations: any[] = [
    {
      id: 'cercanias-malaga',
      name: 'Málaga'
    },
    {
      id: 'cercanias-sevilla',
      name: 'Sevilla'
    },
    {
      id: 'cercanias-cadiz',
      name: 'Cádiz'
    },
  ]
  selectedStation?: Station;

  announcements: Announcement[] = [
    {
      title: 'General - Málaga',
      date: '27/01/2022',
      message: 'Renfe Informa: Incremento de servicios a partir del 01/02/2022. Consulte horarios en la APP, Web o Cartelería de estaciones.'
    },
    {
      title: 'Torremolinos',
      date: '10/01/2022',
      message: 'Con motivo de unas obras de mejora y adecuación, Torremolios permanecerá temporalmente cerrada a partir del día 10 de enero de 2022.'
    },
    {
      title: 'General - Málaga',
      date: '01/12/2021',
      message: 'A causa de un robo y posterior incendio en la estación de Benaládena, han quedado afectados  los servicios de Cercanías de la línea C-1 del Núcleo de Málaga.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
