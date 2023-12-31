import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location-list/location-list.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { AddLocationComponent } from './components/add-location/add-location.component';

const routes: Routes = [
  {
    path: 'location',
    children: [
      { path: '', component: LocationListComponent },
      { path: 'list', component: LocationListComponent },
      { path: 'add', component: AddLocationComponent },
      { path: 'update/:id', component: UpdateLocationComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
