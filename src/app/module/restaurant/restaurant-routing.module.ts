import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { DeleteRestaurantComponent } from './components/delete-restaurant/delete-restaurant.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';

const routes: Routes = [
  {
    path: 'restaurant',
    children: [
      { path: '', component: RestaurantListComponent },
      { path: 'list', component: RestaurantListComponent },
      { path: 'add', component: AddRestaurantComponent },
      { path: 'delete', component: DeleteRestaurantComponent },
      { path: 'update', component: UpdateRestaurantComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
