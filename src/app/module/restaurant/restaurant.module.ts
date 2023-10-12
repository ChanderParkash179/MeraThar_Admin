import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { DeleteRestaurantComponent } from './components/delete-restaurant/delete-restaurant.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';


@NgModule({
  declarations: [
    RestaurantListComponent,
    AddRestaurantComponent,
    DeleteRestaurantComponent,
    UpdateRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
