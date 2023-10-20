import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';

const routes: Routes = [
  {
    path: 'hotel',
    children: [
      { path: '', component: HotelListComponent },
      { path: 'list', component: HotelListComponent },
      { path: 'add', component: AddHotelComponent },
      { path: 'update', component: UpdateHotelComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
