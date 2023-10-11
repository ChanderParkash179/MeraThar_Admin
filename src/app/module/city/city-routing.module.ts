import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
import { AddCityComponent } from './components/add-city/add-city.component';
import { DeleteCityComponent } from './components/delete-city/delete-city.component';
import { UpdateCityComponent } from './components/update-city/update-city.component';

const routes: Routes = [
  {
    path: 'city',
    children: [
      { path: '', component: CityListComponent },
      { path: 'list', component: CityListComponent },
      { path: 'add', component: AddCityComponent },
      { path: 'delete', component: DeleteCityComponent },
      { path: 'update', component: UpdateCityComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
