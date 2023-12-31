import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';

const routes: Routes = [
  {
    path: 'vehicle',
    children: [
      { path: '', component: VehicleListComponent },
      { path: 'list', component: VehicleListComponent },
      { path: 'add', component: AddVehicleComponent },
      { path: 'update/:id', component: UpdateVehicleComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
