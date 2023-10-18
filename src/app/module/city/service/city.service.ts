import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  fetchCities(): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/get/list`, {});
  }

  saveCity(name: City): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/save`, { name });
  }

  deleteCity(id: number): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/delete`, { id });
  }
}