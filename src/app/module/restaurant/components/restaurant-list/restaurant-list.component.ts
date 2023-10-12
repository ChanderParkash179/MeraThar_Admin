import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantService } from '../../service/restaurant.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  ngOnInit(): void {
    this.getRestaurants();
  }

  constructor(private _restaurantService: RestaurantService) { }

  restaurants?: Restaurant[] = [];

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
}
