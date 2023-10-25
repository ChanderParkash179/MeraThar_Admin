import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/model/response';
import { User } from 'src/app/model/user';
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

  saveUser(user: User): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/user/register`, user);
  }

  deleteUser(email: any): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/user/delete`, { email });
  }

  editUser(user: User): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/user/edit`, user);
  }

  getUserByEmail(email: any): Observable<Response> {
    return this._http.post<Response>(`${this.BASE_URL}/user/email`, { email });
  }


}