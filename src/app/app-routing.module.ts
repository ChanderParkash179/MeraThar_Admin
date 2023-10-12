import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'city', loadChildren: () => import('./module/city/city.module').then(m => m.CityModule) },
  { path: 'vehicle', loadChildren: () => import('./module/vehicle/vehicle.module').then(m => m.VehicleModule) },
  { path: 'location', loadChildren: () => import('./module/location/location.module').then(m => m.LocationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
