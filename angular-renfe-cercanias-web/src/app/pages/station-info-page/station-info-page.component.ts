import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';

@Component({
  selector: 'app-station-info-page',
  templateUrl: './station-info-page.component.html',
  styleUrls: ['./station-info-page.component.scss']
})
export class StationInfoPageComponent implements OnInit {
  railNetworkId: string = '';
  railNetwork?: RailNetwork;
  stationInfo: any[] = [
    {
      title: 'Viajar con',
      subtitle: 'Mira las condiciones de viaje para mascotas y bicicletas.',
      headerImg: '../../../assets/mascotas-y-bicicletas-cercanias.jpeg',
      nextPageUrl: 'viajar-con'
    },
    {
      title: 'Estaciones y líneas',
      subtitle: 'Mira el recorrido de las lineas y sus corresponencias.',
      headerImg: '../../../assets/lineas-cercanias.jpeg',
      nextPageUrl: 'lineas'
    },
    {
      title: 'Tarifas',
      subtitle: 'Consulta los billetes, descuentos y abonos disponibles para viajar en Cercanias.',
      headerImg: '../../../assets/descuentos-cercanias.jpeg',
      nextPageUrl: 'tarifas'
    },
    {
      title: 'Atención al Cliente',
      subtitle: 'Resuelve tus dudas sobre Cercanías o ponte en contacto con nosotros.',
      headerImg: '../../../assets/ayuda-cercanias.jpeg',
      nextPageUrl: 'atencion-cliente'
    },
  ]
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private railNetworkService: RailNetworkService, private titleService: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isLoading = true;

      this.railNetworkId = params['rail-network-id'];
      this.getRailNetwork();
    });
  }

  getRailNetwork() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.railNetworkService.getRailNetwork(this.railNetworkId).subscribe(
      res => {
        this.railNetwork = res
        this.titleService.setTitle(`Cercanías ${this.railNetwork.name}`);
      },
      err => this.titleService.setTitle('Error - 404')
    );
  }
}
