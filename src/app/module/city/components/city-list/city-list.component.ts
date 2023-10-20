import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CityService } from '../../service/city.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  ngOnInit(): void {
    this.getCities();
  }

  constructor(private _cityService: CityService, private _router: Router) { }

  cities?: City[] = [];
  city!: City;

  responseCode?: string;
  responseMessage?: string;

  deleteIcon = faTrash;
  updateIcon = faPencil;

  getCities() {
    this._cityService.fetchCities().subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.cities = response.responseData.cities;
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  addCity() {
    this._router.navigate(['city/add']);
  }

  deleteCity(id: number) {
    const city = id;
    this._cityService.deleteCity(city).subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.city = response.responseData.city;
        this.getCities();
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.city = response.responseData.city;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  onDelete(id: any) {
    this.deleteCity(id);
  }

  onUpdate() {
    this._router.navigate(['city/update']);
  }
}