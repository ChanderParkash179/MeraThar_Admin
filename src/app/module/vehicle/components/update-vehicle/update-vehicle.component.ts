import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from '../../service/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {


  constructor(private _vehicleService: VehicleService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();

    this.id = parseInt(this._activatedRouter.snapshot.params['id'], 10);
    this.getVehicleById();
  }

  id: any;
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
      city: new FormControl('', [Validators.required])
    });
  }

  updateVehicle() {
    if (this.vehicleForm.valid) {

      const vehicle = {
        id: this.id,
        name: this.vehicleForm.value.name,
        price: this.vehicleForm.value.price,
        phone: this.vehicleForm.value.phone,
        rating: this.vehicleForm.value.rating,
        type: this.vehicleForm.value.type,
        city: this.vehicleForm.value.city
      };

      this._vehicleService.updateVehicle(vehicle).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.vehicle = response.responseData.vehicle;

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
        console.error(error);
      });
    }
  }

  getVehicleById() {
    this._vehicleService.getVehicleById(this.id).subscribe((response: any) => {
      this.responseCode = response.responseCode;
      this.responseMessage = response.responseMessage;
      this.setFormValues(response);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  resetFormValues() {
    this.vehicleForm.reset();
  }

  setFormValues(response: any) {
    this.vehicleForm.get('name')?.setValue(response.responseData.vehicle.name);
    this.vehicleForm.get('price')?.setValue(response.responseData.vehicle.price);
    this.vehicleForm.get('phone')?.setValue(response.responseData.vehicle.phone);
    this.vehicleForm.get('rating')?.setValue(response.responseData.vehicle.rating);
    this.vehicleForm.get('type')?.setValue(response.responseData.vehicle.type);
    this.vehicleForm.get('city')?.setValue(response.responseData.vehicle.city);
  }
}
