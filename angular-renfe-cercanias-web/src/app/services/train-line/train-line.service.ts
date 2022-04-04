import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrainLine } from 'src/app/models/TrainLine';

@Injectable({
  providedIn: 'root'
})
export class TrainLineService {
  private trainLines: TrainLine[] = [
  ]

  constructor() { }

  getTrainLines(): Observable<TrainLine[]> {
    return of(this.trainLines);
  }
}
