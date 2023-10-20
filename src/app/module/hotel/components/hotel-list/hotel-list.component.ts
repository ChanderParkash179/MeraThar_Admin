import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Hotel } from 'src/app/model/hotel';
import { Router } from '@angular/router';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

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
  hotel!: Hotel;

  responseCode?: string;
  responseMessage?: string;

  deleteIcon = faTrash;
  updateIcon = faPencil;

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

  deleteHotel(id: number) {
    const hotel = id;
    this._hotelService.deleteHotel(hotel).subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.hotel = response.responseData.hotel;
        this.getHotels();
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.hotel = response.responseData.hotel;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  onDelete(id: any) {
    this.deleteHotel(id);
  }

  onUpdate() {
    this._router.navigate(['hotel/update']);
  }
}