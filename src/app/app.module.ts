import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './module/user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityModule } from './module/city/city.module';
import { VehicleModule } from './module/vehicle/vehicle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    UserModule,
    CityModule,
    VehicleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
