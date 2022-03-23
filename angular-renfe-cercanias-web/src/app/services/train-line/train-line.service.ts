import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrainLine } from 'src/app/models/TrainLine';

@Injectable({
  providedIn: 'root'
})
export class TrainLineService {
  private trainLines: TrainLine[] = [
    {
      id: 'malaga-c1',
      line: 'C1',
      originStation: 'Málaga Centro-Alameda',
      destinationStation: 'Fuengirola',
      cssColor: 'light-blue',
      stations: [
        {
          name: 'Málaga Centro-Alameda',
          additionalInfo: [
            "accesible",
            "bus-stop"
          ],
          travelTimeToNextStation: 2,
          connectedLines: [
            'C2'
          ]
        },
        {
          name: 'Málaga María Zambrano',
          additionalInfo: [
            'accesible',
            'bus-stop',
            'renfe-ave'
          ],
          travelTimeToNextStation: 2,
          connectedLines: [
            'C2'
          ]
        },
        {
          name: 'Victoria Kent',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ],
          travelTimeToNextStation: 3,
          connectedLines: [
            'C2'
          ]
        },
        {
          name: 'Guadalhorce',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 2,
        },
        {
          name: 'Aeropuerto',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 3
        },
        {
          name: 'Plaza Mayor',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 2
        },
        {
          name: 'Los Álamos',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 1
        },
        {
          name: 'La Colina',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 3
        },
        {
          name: 'Torremolinos',
          additionalInfo: [
            'bus-stop',
          ],
          travelTimeToNextStation: 2
        },
        {
          name: 'Montemar Alto',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 2
        },
        {
          name: 'El Pinillo',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 3
        },
        {
          name: 'Benalmádena',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 3
        },
        {
          name: 'Torremuelle',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 3
        },
        {
          name: 'Carvajal',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 2
        },
        {
          name: 'Torreblanca',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 3
        },
        {
          name: 'Los Boliches',
          additionalInfo: [
            'accesible',
          ],
          travelTimeToNextStation: 4
        },
        {
          name: 'Fuengirola',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        }
      ]
    },
    {
      id: 'malaga-c2',
      line: 'C2',
      originStation: 'Málaga Centro-Alameda',
      destinationStation: 'Álora',
      cssColor: 'darker-green',
      stations: [
        {
          name: 'Málaga Centro-Alameda',
          additionalInfo: [
            "accesible",
            "bus-stop"
          ],
          travelTimeToNextStation: 2,
          connectedLines: [
            'C1'
          ]
        },
        {
          name: 'Málaga María Zambrano',
          additionalInfo: [
            'accesible',
            'bus-stop',
            'renfe-ave'
          ],
          travelTimeToNextStation: 2,
          connectedLines: [
            'C1'
          ]
        },
        {
          name: 'Victoria Kent',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ],
          travelTimeToNextStation: 3,
          connectedLines: [
            'C1'
          ]
        },
        {
          name: 'Los Prados',
          additionalInfo: [
            'accesible'
          ],
          travelTimeToNextStation: 5,
        },
        {
          name: 'Campanillas',
          additionalInfo: [
            'accesible'
          ],
          travelTimeToNextStation: 5,
        },
        {
          name: 'Cártama',
          additionalInfo: [
            'accesible'
          ],
          travelTimeToNextStation: 4,
        },
        {
          name: 'Aljaima',
          additionalInfo: [
            'accesible'
          ],
          travelTimeToNextStation: 5,
        },
        {
          name: 'Pizarra',
          additionalInfo: [
            'accesible'
          ],
          travelTimeToNextStation: 6,
        },
        {
          name: 'Álora',
          additionalInfo: [
            'accesible'
          ]
        }
      ]
    }

  ]

  constructor() { }

  getTrainLines(): Observable<TrainLine[]> {
    return of(this.trainLines);
  }
}
