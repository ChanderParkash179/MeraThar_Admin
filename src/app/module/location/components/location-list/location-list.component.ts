import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  ngOnInit(): void {
    this.getLocations();
  }

  constructor(private _locationService: LocationService, private _router: Router) { }

  locations?: Location[] = [];
  location!: Location;

  responseCode?: string;
  responseMessage?: string;

  deleteIcon = faTrash;
  updateIcon = faPencil;

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

  addLocation() {
    this._router.navigate(['location/add']);
  }

  deleteLocation(id: number) {
    const location = id;
    this._locationService.deleteLocation(location).subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.location = response.responseData.location;
        this.getLocations();
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.location = response.responseData.location;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  onDelete(id: any) {
    this.deleteLocation(id);
  }

  onUpdate(id: any) {
    this._router.navigate(['location/update', id]);
  }
}
