import { Component, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/Fare';
import { Station } from 'src/app/models/Station';
import { TrainLine } from 'src/app/models/TrainLine';
import { RailNetworkService } from 'src/app/services/rail-network/rail-network.service';
import { Title } from "@angular/platform-browser";
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { AuthService } from 'src/app/services/auth.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-buy-ticket-page',
  templateUrl: './buy-ticket-page.component.html',
  styleUrls: ['./buy-ticket-page.component.scss']
})
export class BuyTicketPageComponent implements OnInit {
  paypalConfig?: IPayPalConfig;
  selectedFare?: Fare;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  displayPaymentSuccessfulModal: boolean = false;
  isUserLoggedIn: boolean = false;

  railNetworks: any[] = [
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
  selectedRailNetwork?: any = {
    id: 'cercanias-asturias',
    name: 'Asturias'
  };

  fares: Fare[] = [];
  nZones: number = 1;

  trainLinesToShow: TrainLine[] = [];
  selectedTrainLine?: TrainLine;

  allStations: Station[] = [];
  originStationsToShow: Station[] = [];
  destinationStationToShow: Station[] = [];
  selectedOriginStation?: Station;
  selectedDestinationStation?: Station;

  constructor(private railNetworkService: RailNetworkService, private authService: AuthService, private titleService: Title) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isLoggedIn;
    this.initConfig();
    this.titleService.setTitle('Comprar billete');
    this.getRailNetworkInfo();
  }

  private initConfig() {
    this.paypalConfig = {
      currency: 'EUR',
      clientId: 'AdjAbsf1eurfATDuprWRoDm92UDNQ50YTk4de84eXlonrymR2Dwg7_BUZkyJSANwVTkZfGyfKgy0B1iU',
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: `${this.selectedOriginStation?.name} - ${this.selectedDestinationStation?.name}: ${this.selectedFare!.fareDescription.title}`,
            amount: {
              currency_code: 'EUR',
              value: `${this.selectedFare!.prices!.find((farePrice) => farePrice.n_zones === this.nZones)!.price}`
            }
          }
        ]
      },
      onApprove: (data, actions) => {
        let newTicket: Ticket = {
          originStation: this.selectedOriginStation!.name,
          destinationStation: this.selectedDestinationStation!.name,
          railNetworkName: this.selectedRailNetwork!.name,
          type: this.selectedFare!.fareDescription.title,
          price: this.selectedFare!.prices!.find((farePrice) => farePrice.n_zones === this.nZones)!.price,
          dateBought: new Date().getTime()
        }

        this.authService.addNewTicket(newTicket)
          .then(() => {
            this.displayPaymentSuccessfulModal = true;
          });
      },
      onError: (err) => {
        console.log(err);
      }
    }
  }


  onRailNetworkDropdownValueChanged() {
    this.getRailNetworkInfo();
  }

  getRailNetworkInfo() {
    this.railNetworkService.getRailNetwork(this.selectedRailNetwork?.id).subscribe((data) => {
      this.originStationsToShow = [];
      this.destinationStationToShow = [];
      this.selectedOriginStation = undefined;
      this.selectedDestinationStation = undefined;
      this.selectedFare = undefined;

      this.trainLinesToShow = data.trainLines;
      this.fares = data.fares.filter((fare) => fare.fareId === 'billete-sencillo' || fare.fareId === 'billete-ida-vuelta');
    });
  }

  onTrainLineDropdownValueChanged() {
    this.allStations = this.originStationsToShow = this.destinationStationToShow = this.trainLinesToShow.find((trainLine) => trainLine.trainLineId === this.selectedTrainLine!.trainLineId)!.stations;

    this.selectedOriginStation = undefined;
    this.selectedDestinationStation = undefined;
    this.selectedFare = undefined;
  }

  onOriginStationDropdownValueChanged() {
    this.destinationStationToShow = this.allStations.filter((station) => station.name !== this.selectedOriginStation?.name);

    if (this.isFormFilledCorrectly()) {
      this.nZones = Math.abs(this.selectedOriginStation!.zone - this.selectedDestinationStation!.zone) + 1;
    }
  }

  onDestinationStationDropdownValueChanged() {
    this.originStationsToShow = this.allStations.filter((station) => station.name !== this.selectedDestinationStation?.name);

    if (this.isFormFilledCorrectly()) {
      this.nZones = Math.abs(this.selectedOriginStation!.zone - this.selectedDestinationStation!.zone) + 1;

      if (this.selectedFare === undefined) {
        this.selectedFare = this.fares.find((fare) => fare.fareId === 'billete-sencillo');
      }
    }
  }

  setSelectedFare(selectedFare: Fare) {
    this.selectedFare = selectedFare;
  }

  onPaymentSuccessfulModalClose() {
    this.displayPaymentSuccessfulModal = false;
  }

  isFormFilledCorrectly(): boolean {
    return this.selectedTrainLine !== undefined && this.selectedOriginStation !== undefined && this.selectedDestinationStation !== undefined;
  }
}
