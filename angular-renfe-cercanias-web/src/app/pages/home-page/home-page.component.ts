import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
      name: 'Asturias',
      description: 'Disfrutaras de una interesante colección de vehículos de vapor.',
      imgName: 'asturias'
    },
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
      name: 'Murcia/Alicante',
      description: 'Descubre su patrimonio cultural con Cercanías Murcia/Alicante.',
      imgName: 'murcia-alicante'
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
      name: 'Sevilla',
      description: 'Descubre Sevilla y su provincia en Cercanías.',
      imgName: 'sevilla'
    },
    {
      name: 'Valencia',
      description: 'Compra en tu estación la entrada para visitar la Ciudad de las Artes.',
      imgName: 'valencia'
    },
    {
      name: 'Zaragoza',
      description: 'Descubre uno de los santurarios marianos más importantes del mundo católico.',
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

  stationsDropdown: any[] = [
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
    },
  ]
  selectedStation?: any;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Inicio');
  }

  onDropdownValueChanged() {
    // TODO - Load stations when value has been changed
    console.log(this.selectedStation);
  }
}
