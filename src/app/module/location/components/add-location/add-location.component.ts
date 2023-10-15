import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  constructor(private _locationService: LocationService) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterName: string = 'Enter Tourist Point Name';
  enterLocation: string = 'Enter Tourist Point Location';
  enterDescription: string = 'Enter Tourist Point Description';
  enterCity: string = 'Enter Tourist Point City';

  locationForm!: FormGroup;
  location?: Location;

  responseCode?: string;
  responseMessage?: string;

  formInit() {
    this.locationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
  }

  addLocation() {
    if (this.locationForm.valid) {
      const locationPayLoad = this.locationForm.value;

      this._locationService.saveLocation(locationPayLoad).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.location = response.responseData.place;
          this.resetFormValues();
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.location = response.responseData.place;
          this.resetFormValues();
        }
      }, (error: HttpErrorResponse) => {
        console.error(error)
      });
    }
  }

  resetFormValues() {
    this.locationForm.reset();
  }
}
