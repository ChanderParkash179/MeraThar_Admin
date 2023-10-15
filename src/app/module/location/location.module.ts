import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { DeleteLocationComponent } from './components/delete-location/delete-location.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLocationComponent,
    DeleteLocationComponent,
    UpdateLocationComponent,
    LocationListComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LocationModule { }
