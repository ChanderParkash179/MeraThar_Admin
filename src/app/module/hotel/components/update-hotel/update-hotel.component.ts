import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/app/model/hotel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  constructor(private _hotelService: HotelService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();

    this.id = parseInt(this._activatedRouter.snapshot.params['id'], 10);
    this.getHotelById();
  }

  enterName: string = 'Enter Hotel name';
  enterAddress: string = 'Enter Hotel address';
  enterPhone: string = 'Enter Hotel phone';
  enterRating: string = 'Enter Hotel rating';
  enterCity: string = 'Enter Hotel City';

  id: any;
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

  updateHotel() {
    if (this.hotelForm.valid) {

      const hotel = {
        id: this.id,
        name: this.hotelForm.value.name,
        address: this.hotelForm.value.address,
        phone: this.hotelForm.value.phone,
        rating: this.hotelForm.value.rating,
        city: this.hotelForm.value.city
      };

      this._hotelService.updateHotel(hotel).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.hotel = response.responseData.hotel;

          setTimeout(() => {
            this._router.navigate(['hotel/list']);
          }, 1000);
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

  getHotelById() {
    this._hotelService.getHotelById(this.id).subscribe((response: any) => {
      this.responseCode = response.responseCode;
      this.responseMessage = response.responseMessage;
      this.setFormValues(response);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  resetFormValues() {
    this.hotelForm.reset();
  }

  setFormValues(response: any) {
    this.hotelForm.get('name')?.setValue(response.responseData.hotel.name);
    this.hotelForm.get('address')?.setValue(response.responseData.hotel.address);
    this.hotelForm.get('phone')?.setValue(response.responseData.hotel.phone);
    this.hotelForm.get('rating')?.setValue(response.responseData.hotel.rating);
    this.hotelForm.get('city')?.setValue(response.responseData.hotel.city);
  }
}