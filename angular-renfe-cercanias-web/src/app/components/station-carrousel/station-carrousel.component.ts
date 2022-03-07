import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-carrousel',
  templateUrl: './station-carrousel.component.html',
  styleUrls: ['./station-carrousel.component.scss']
})
export class StationCarrouselComponent implements OnInit {
  stations: any[] = [
    {
      name: 'Málaga',
      description: 'Un privilegiado enclave natural.',
      imgName: 'malaga'
    },
    {
      name: 'Cádiz',
      description: 'Conoce la arquitectura de Cádiz. ',
      imgName: 'cadiz'
    },
    {
      name: 'Sevilla',
      description: 'Descubre Sevilla y su provincia en Cercanías.',
      imgName: 'sevilla'
    },
    {
      name: 'Málaga',
      description: 'Un privilegiado enclave natural.',
      imgName: 'malaga'
    },
    {
      name: 'Cádiz',
      description: 'Conoce la arquitectura de Cádiz.',
      imgName: 'cadiz'
    },
    {
      name: 'Sevilla',
      description: 'Descubre Sevilla y su provincia en Cercanias',
      imgName: 'sevilla'
    },
    {
      name: 'Málaga',
      description: 'Un privilegiado enclave natural.',
      imgName: 'malaga'
    },
    {
      name: 'Cádiz',
      description: 'Conoce la arquitectura de Cádiz.',
      imgName: 'cadiz'
    },
    {
      name: 'Sevilla',
      description: 'Descubre Sevilla y su provincia en Cercanías',
      imgName: 'sevilla'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
