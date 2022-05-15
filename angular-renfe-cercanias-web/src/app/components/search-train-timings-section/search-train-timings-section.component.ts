import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-train-timings-section',
  templateUrl: './search-train-timings-section.component.html',
  styleUrls: ['./search-train-timings-section.component.scss']
})
export class SearchTrainTimingsSectionComponent implements OnInit {

  stations: any[] = [
    {
      id: 'cercanias-asturias',
      name: 'Asturias'
    },
    {
      id: 'cercanias-bilbao',
      name: 'Bilbao'
    },
    {
      id: 'cercanias-cadiz',
      name: 'Cádiz'
    },
    {
      id: 'cercanias-malaga',
      name: 'Málaga'
    },
    {
      id: 'cercanias-murcia-alicante',
      name: 'Murcia/Alicante'
    },
    {
      id: 'cercanias-santander',
      name: 'Santander'
    },
    {
      id: 'cercanias-san-sebastian',
      name: 'San Sebástian'
    },
    {
      id: 'cercanias-sevilla',
      name: 'Sevilla'
    },
    {
      id: 'cercanias-valencia',
      name: 'Valencia'
    },
    {
      id: 'cercanias-zaragoza',
      name: 'Zaragoza'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
