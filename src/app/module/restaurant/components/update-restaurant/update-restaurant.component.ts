import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantService } from '../../service/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})

export class UpdateRestaurantComponent implements OnInit {

  constructor(private _restaurantService: RestaurantService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();

    this.id = parseInt(this._activatedRouter.snapshot.params['id'], 10);
    this.getRestaurantById();
  }

  id: any;
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

  updateRestaurant() {
    if (this.restaurantForm.valid) {

      const restaurant = {
        id: this.id,
        name: this.restaurantForm.value.name,
        address: this.restaurantForm.value.address,
        phone: this.restaurantForm.value.phone,
        rating: this.restaurantForm.value.rating,
        city: this.restaurantForm.value.city
      };

      this._restaurantService.updateRestaurant(restaurant).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.restaurant = response.responseData.restaurant;

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

  getRestaurantById() {
    this._restaurantService.getRestaurantById(this.id).subscribe((response: any) => {
      this.responseCode = response.responseCode;
      this.responseMessage = response.responseMessage;
      this.setFormValues(response);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  resetFormValues() {
    this.restaurantForm.reset();
  }

  setFormValues(response: any) {
    this.restaurantForm.get('name')?.setValue(response.responseData.restaurant.name);
    this.restaurantForm.get('address')?.setValue(response.responseData.restaurant.address);
    this.restaurantForm.get('phone')?.setValue(response.responseData.restaurant.phone);
    this.restaurantForm.get('rating')?.setValue(response.responseData.restaurant.rating);
    this.restaurantForm.get('city')?.setValue(response.responseData.restaurant.city);
  }
}