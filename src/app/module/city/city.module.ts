import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { AddCityComponent } from './components/add-city/add-city.component';
import { UpdateCityComponent } from './components/update-city/update-city.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AddCityComponent,
    UpdateCityComponent,
    CityListComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class CityModule { }
