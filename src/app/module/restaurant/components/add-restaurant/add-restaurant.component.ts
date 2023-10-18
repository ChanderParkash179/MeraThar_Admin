import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../service/restaurant.service';
import { Restaurant } from 'src/app/model/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private _restaurantService: RestaurantService, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterName: string = 'Enter Restaurant name';
  enterAddress: string = 'Enter Restaurant address';
  enterPhone: string = 'Enter Restaurant phone';
  enterRating: string = 'Enter Restaurant rating';
  enterCity: string = 'Enter Restaurant City';

  restaurant?: Restaurant;
  responseCode?: string;
  responseMessage: string = 'Please Enter Restaurant Details';

  restaurantForm!: FormGroup;

  formInit() {
    this.restaurantForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
      rating: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
  }

  addRestaurant() {
    if (this.restaurantForm.valid) {
      const restaurantPayLoad = this.restaurantForm.value;
      this._restaurantService.saveRestaurant(restaurantPayLoad).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.restaurant = response.responseData.restaurant;
          this.resetFormValues();

          setTimeout(() => {
            this._router.navigate(['restaurant/list']);
          }, 1000);
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.restaurant = response.responseData.restaurant;
          this.resetFormValues();
        }
      }, (error: HttpErrorResponse) => {
        console.error(error);
      });
    }
  }

  resetFormValues() {
    this.restaurantForm.reset();
  }
}