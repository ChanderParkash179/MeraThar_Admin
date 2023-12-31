import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AddLocationComponent,
    UpdateLocationComponent,
    LocationListComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class LocationModule { }
