import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { City } from 'src/app/model/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor(private _cityService: CityService, private _router: Router) { }

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
      name: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }


  addCity() {
    if (this.cityForm.valid) {
      const cityName = this.cityForm.value.name;
      this._cityService.saveCity(cityName).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.city = response.responseData.city;
          this.cityForm.get('name')?.setValue('');

          setTimeout(() => {
            this._router.navigate(['city/list']);
          }, 1000);
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.city = response.responseData.city;
          this.cityForm.get('name')?.setValue('');
        }
      }, (error: HttpErrorResponse) => {
        console.error(error);
      });
    }
  }
}