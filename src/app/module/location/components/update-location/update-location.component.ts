import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  constructor(private _locationService: LocationService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();

    this.id = parseInt(this._activatedRouter.snapshot.params['id'], 10);
    this.getLocationById();
  }

  id: any;
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

  updateLocation() {
    if (this.locationForm.valid) {

      const location = {
        id: this.id,
        name: this.locationForm.value.name,
        location: this.locationForm.value.location,
        description: this.locationForm.value.description,
        city: this.locationForm.value.city
      };

      this._locationService.updateLocation(location).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.location = response.responseData.place;

          setTimeout(() => {
            this._router.navigate(['location/list']);
          }, 1000);
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.location = response.responseData.place;
          this.resetFormValues();
        }
      }, (error: HttpErrorResponse) => {
        console.error(error);
      });
    }
  }

  getLocationById() {
    this._locationService.getLocationById(this.id).subscribe((response: any) => {
      this.responseCode = response.responseCode;
      this.responseMessage = response.responseMessage;
      this.setFormValues(response);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  resetFormValues() {
    this.locationForm.reset();
  }

  setFormValues(response: any) {
    this.locationForm.get('name')?.setValue(response.responseData.place.name);
    this.locationForm.get('location')?.setValue(response.responseData.place.location);
    this.locationForm.get('description')?.setValue(response.responseData.place.description);
    this.locationForm.get('city')?.setValue(response.responseData.place.city);
  }
}