import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RailNetwork } from 'src/app/models/RailNetwork';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RailNetworkService {
  private apiUrl: string = `${environment.apiUrl}/rail-networks`;
  private railNetworkIdSaved: string = '';
  private railNetwork: Observable<RailNetwork> = new Observable();

  constructor(private http: HttpClient) { }

  getRailNetwork(railNetworkId: string) {
    if (this.railNetworkIdSaved != railNetworkId) {
      this.railNetworkIdSaved = railNetworkId;
      this.railNetwork = this.http.get<RailNetwork>(`${this.apiUrl}/${railNetworkId}`);
    }

    return this.railNetwork;
  }
}
