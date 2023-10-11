import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user/list', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'city', loadChildren: () => import('./module/city/city.module').then(m => m.CityModule) },
  { path: 'vehicle', loadChildren: () => import('./module/vehicle/vehicle.module').then(m => m.VehicleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
