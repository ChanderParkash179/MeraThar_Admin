import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CityService } from '../../service/city.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private _cityService: CityService) { }

  cities?: City[] = [];

  responseCode?: string;
  responseMessage?: string;

  getUsers() {
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
}