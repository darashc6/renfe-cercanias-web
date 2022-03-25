import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  introInfos: any[] = [
    {
      title: 'Planifica',
      subtitle: 'Simple, elige de donde a donde y cuando. Así de fácil.',
      imgSrc: '../assets/planning_ilustration.png'
    },
    {
      title: 'Descuentos',
      subtitle: 'Disfruta de fantásticas ofertas en cualquiera de tus trayectos.',
      imgSrc: '../assets/discount_ilustration.png'
    },
    {
      title: 'Contigo',
      subtitle: 'Un viaje es más que un billete. Estamos aquí, para lo que necesites.',
      imgSrc: '../assets/with_you_ilustration.png'
    },
  ]

  stations: any[] = [
    {
      name: 'Bilbao',
      description: 'Te acercamos a la oferta cultural bilbaína, sin agobios, sin atascos.',
      imgName: 'bilbao'
    },
    {
      name: 'Cádiz',
      description: 'Conoce la arquitectura de Cádiz. ',
      imgName: 'cadiz'
    },
    {
      name: 'Málaga',
      description: 'Un privilegiado enclave natural.',
      imgName: 'malaga'
    },
    {
      name: 'Santander',
      description: 'Recorre el mejor tramo de Calzada Romana conocida en Cantabria.',
      imgName: 'santander'
    },
    {
      name: 'San Sebastián',
      description: 'Vive la fiestas patronales, siempre hay un tren de Cercanías para llevarte.',
      imgName: 'san-sebastian'
    },
    {
      name: 'Zaragoza',
      description: 'Descubre Zaragoza y su provincia en Cercanías.',
      imgName: 'zaragoza'
    }
  ]

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
