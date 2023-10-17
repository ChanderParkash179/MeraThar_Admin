import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from '../../service/hotel.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private _hotelService: HotelService) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterName: string = 'Enter Hotel name';
  enterAddress: string = 'Enter Hotel address';
  enterPhone: string = 'Enter Hotel phone';
  enterRating: string = 'Enter Hotel rating';
  enterCity: string = 'Enter Hotel City';

  hotel?: Hotel;
  responseCode?: string;
  responseMessage: string = 'Please Enter Hotel Details';

  hotelForm!: FormGroup;

  formInit() {
    this.hotelForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
      rating: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
  }

  addHotel() {
    if (this.hotelForm.valid) {
      const hotelPayLoad = this.hotelForm.value;
      this._hotelService.saveHotel(hotelPayLoad).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.hotel = response.responseData.hotel;
          this.resetFormValues();
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.hotel = response.responseData.hotel;
          this.resetFormValues();
        }
      }, (error: HttpErrorResponse) => {
        console.error(error);
      });
    }
  }

  resetFormValues() {
    this.hotelForm.reset();
  }
}