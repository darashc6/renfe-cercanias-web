import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
