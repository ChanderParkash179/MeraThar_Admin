import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/model/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  constructor(private _vehicleService: VehicleService, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterName: string = 'Enter Vehicle Name';
  enterPrice: string = 'Enter Vehicle Price';
  enterPhone: string = 'Enter Vehicle Phone';
  enterRating: string = 'Enter Vehicle Rating';
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
      type: new FormControl(''),
      transport: new FormControl(''),
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
          this.resetFormValues();

          setTimeout(() => {
            this._router.navigate(['vehicle/list']);
          }, 1000);
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.vehicle = response.responseData.vehicle;
          this.resetFormValues();
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
