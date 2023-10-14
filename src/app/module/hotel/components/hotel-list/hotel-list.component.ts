import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Hotel } from 'src/app/model/hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  ngOnInit(): void {
    this.getHotels();
  }

  constructor(private _hotelService: HotelService, private _router: Router) { }

  hotels?: Hotel[] = [];

  responseCode?: string;
  responseMessage?: string;

  getHotels() {
    this._hotelService.fetchHotels().subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.hotels = response.responseData.hotels;
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  addHotel() {
    this._router.navigate(['hotel/add']);
  }
}