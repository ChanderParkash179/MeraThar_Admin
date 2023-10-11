import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  ngOnInit(): void {
    this.getVehicles();
  }

  constructor(private _vehicleService: VehicleService) { }

  vehicles?: Vehicle[] = [];

  responseCode?: string;
  responseMessage?: string;

  getVehicles() {
    this._vehicleService.fetchVehicles().subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.vehicles = response.responseData.vehicles;
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }
}
