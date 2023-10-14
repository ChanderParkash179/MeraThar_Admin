import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/model/restaurant';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private _http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  fetchRestaurants(): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/restaurant/get/list`, {});
  }

  saveRestaurant(restaurant: Restaurant): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/city/restaurant/save`, restaurant);
  }
}
