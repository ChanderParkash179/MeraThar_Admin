import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './components/delete-hotel/delete-hotel.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateHotelComponent,
    AddHotelComponent,
    DeleteHotelComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HotelModule { }
