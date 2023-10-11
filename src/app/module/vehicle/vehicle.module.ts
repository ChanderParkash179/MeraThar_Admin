import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './components/delete-vehicle/delete-vehicle.component';


@NgModule({
  declarations: [
    VehicleListComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
