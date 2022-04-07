import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  dialogOpen: boolean = false;
  sidebarOpen: boolean = false;

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
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogOpen = true;
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
