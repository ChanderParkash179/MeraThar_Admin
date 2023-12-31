import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './module/user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityModule } from './module/city/city.module';
import { VehicleModule } from './module/vehicle/vehicle.module';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LocationModule } from './module/location/location.module';
import { HomeModule } from './module/home/home.module';
import { HotelModule } from './module/hotel/hotel.module';
import { RestaurantModule } from './module/restaurant/restaurant.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HomeModule,
    UserModule,
    CityModule,
    VehicleModule,
    LocationModule,
    HotelModule,
    RestaurantModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
