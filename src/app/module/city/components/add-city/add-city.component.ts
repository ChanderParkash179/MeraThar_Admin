import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor(private _cityService: CityService) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterCity: string = 'Enter your City';
  city?: City;
  responseCode?: string;
  responseMessage: string = 'Please Enter your City';

  cityForm!: FormGroup;

  formInit() {
    this.cityForm = new FormGroup({
      name: new FormControl('')
    });
    console.log(this.cityForm);
  }


  addCity() {
    console.log(this.cityForm);
    if (this.cityForm.valid) {
      const cityName = this.cityForm.value.name;
      this._cityService.saveCity(cityName).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.city = response.responseData.city;
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.city = response.responseData.city;
        }
      }, (error: HttpErrorResponse) => {
        console.error(error);
      });
    }
  }

}
