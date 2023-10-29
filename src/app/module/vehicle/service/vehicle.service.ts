import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/model/vehicle';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  fetchVehicles(): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/vehicle/get/list`, {});
  }

  saveVehicle(vehicle: Vehicle): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/vehicle/save`, vehicle);
  }

  deleteVehicle(id: number): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/vehicle/delete`, { id });
  }

  updateVehicle(vehicle: Vehicle): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/vehicle/update`, vehicle);
  }

  getVehicleById(id: number): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/vehicle/get/id`, { id });
  }

}
