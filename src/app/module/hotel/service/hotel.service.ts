import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private _http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  fetchHotels(): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/hotel/get/list`, {});
  }

  saveHotel(hotel: Hotel): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/hotel/save`, hotel);
  }

  updateHotel(hotel: Hotel): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/hotel/update`, hotel);
  }

  deleteHotel(id: number): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/hotel/delete`, { id });
  }

  getHotelById(id: number): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/hotel/get/id`, { id });
  }
}
