import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location';
import { LocationService } from '../../service/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  ngOnInit(): void {
    this.getLocations();
  }

  constructor(private _locationService: LocationService) { }

  locations?: Location[] = [];

  responseCode?: string;
  responseMessage?: string;

  getLocations() {
    this._locationService.fetchLocations().subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.locations = response.responseData.places;
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }
}
