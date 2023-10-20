import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/model/city';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {

  constructor(private _cityService: CityService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();

    this.id = parseInt(this._activatedRouter.snapshot.params['id'], 10);
    this.getCityById();
  }

  id: any;
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

  updateCity() {
    if (this.cityForm.valid) {

      const city = {
        id: this.id,
        name: this.cityForm.value.name
      }

      this._cityService.updateCity(city).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.city = response.responseData.city;

          setTimeout(() => {
            this._router.navigate(['city/list']);
          }, 1000);
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

  getCityById() {
    this._cityService.getCityById(this.id).subscribe((response: any) => {
      this.responseCode = response.responseCode;
      this.responseMessage = response.responseMessage;
      this.cityForm.get('name')?.setValue(response.responseData.city.name);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

}