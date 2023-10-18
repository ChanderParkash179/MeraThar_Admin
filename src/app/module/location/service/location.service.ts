import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/model/location';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  fetchLocations(): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/tourist-point/get/list`, {});
  }

  saveLocation(location: Location): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/tourist-point/save`, location);
  }

  deleteLocation(id: number): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/tourist-point/delete`, { id });
  }
}
