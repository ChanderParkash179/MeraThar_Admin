import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/model/response';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  fetchUsers(): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/user/list`, {});
  }
}