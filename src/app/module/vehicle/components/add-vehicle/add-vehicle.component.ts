import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  constructor(private _vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterName: string = 'Enter Vehicle Name';
  enterPrice: string = 'Enter Vehicle Price';
  enterPhone: string = 'Enter Vehicle Phone';
  enterRating: string = 'Enter Vehicle Rating';
  enterType: string = 'Enter Vehicle Type';
  enterTransport: string = 'Enter Vehicle Transport';
  enterCity: string = 'Enter Vehicle City';

  vehicleForm!: FormGroup;
  vehicle?: Vehicle;

  responseCode?: string;
  responseMessage?: string;

  formInit() {
    this.vehicleForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      transport: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
  }

  addVehicle() {
    if (this.vehicleForm.valid) {
      const vehiclePayLoad = this.vehicleForm.value;

      this._vehicleService.saveVehicle(vehiclePayLoad).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.vehicle = response.responseData.vehicle;
          // this.resetFormValues();
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.vehicle = response.responseData.vehicle;
          // this.resetFormValues();
        }
      }, (error: HttpErrorResponse) => {
        console.error(error)
      });
    }
  }

  resetFormValues() {
    this.vehicleForm.reset();
  }
}
