import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantService } from '../../service/restaurant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  ngOnInit(): void {
    this.getRestaurants();
  }

  constructor(private _restaurantService: RestaurantService, private _router: Router) { }

  restaurants?: Restaurant[] = [];
  restaurant!: Restaurant;

  responseCode?: string;
  responseMessage?: string;

  getRestaurants() {
    this._restaurantService.fetchRestaurants().subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.restaurants = response.responseData.restaurants;
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  addRestaurant() {
    this._router.navigate(['restaurant/add']);
  }

  deleteRestaurant(id: number) {
    const restaurant = id;
    this._restaurantService.deleteRestaurant(restaurant).subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.restaurant = response.responseData.restaurant;
        this.getRestaurants();
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.restaurant = response.responseData.restaurant;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  onDelete(id: any) {
    this.deleteRestaurant(id);
  }
}
