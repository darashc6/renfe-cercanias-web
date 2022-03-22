import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-info-page',
  templateUrl: './station-info-page.component.html',
  styleUrls: ['./station-info-page.component.scss']
})
export class StationInfoPageComponent implements OnInit {
  stationInfo: any[] = [
    {
      title: 'Viajar con',
      subtitle: 'Mira las condiciones de viaje para mascotas y bicicletas.',
      headerImg: '../../../assets/mascotas-y-bicicletas-cercanias.jpeg',
      nextPageUrl: '/nucleos/viajar-con'
    },
    {
      title: 'Estaciones y líneas',
      subtitle: 'Mira el recorrido de las lineas y sus corresponencias.',
      headerImg: '../../../assets/lineas-cercanias.jpeg',
      nextPageUrl: '/nucleos/lineas'
    },
    {
      title: 'Tarifas',
      subtitle: 'Consulta los billetes, descuentos y abonos disponibles para viajar en Cercanias.',
      headerImg: '../../../assets/descuentos-cercanias.jpeg',
      nextPageUrl: '/nucleos/tarifas'
    },
    {
      title: 'Atención al Cliente',
      subtitle: 'Resuelve tus dudas sobre Cercanías o ponte en contacto con nosotros.',
      headerImg: '../../../assets/ayuda-cercanias.jpeg',
      nextPageUrl: '/nucleos/atencion-cliente'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goToDetailsPage(url: string) {
    window
  }

}
