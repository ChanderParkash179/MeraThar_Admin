import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _userFormService: UserService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.formInit();

    this.email = this._activatedRouter.snapshot.params['email'];
    this.getUserByEmail();
  }

  email: any;
  enterFirstName: string = 'Enter First Name';
  enterLastName: string = 'Enter Last Name';
  enterPassword: string = 'Enter User Password';

  user?: User;
  responseCode?: string;
  responseMessage: string = 'Please Enter User Details';

  userForm!: FormGroup;

  formInit() {
    this.userForm = new FormGroup({
      email: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
    });
  }

  editUser() {
    if (this.userForm.valid) {

      const user = {
        email: this.email,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        password: this.userForm.value.password,
        gender: this.userForm.value.gender
      };

      this._userFormService.editUser(user).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.user = response.responseData.user;

          setTimeout(() => {
            this._router.navigate(['user/list']);
          }, 1000);
        } else {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.user = response.responseData.user;
          this.resetFormValues();
        }
      }, (error: HttpErrorResponse) => {
        console.error(error);
      });
    }
  }

  getUserByEmail() {
    this._userFormService.getUserByEmail(this.email).subscribe((response: any) => {
      this.responseCode = response.responseCode;
      this.responseMessage = response.responseMessage;
      this.setFormValues(response);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  resetFormValues() {
    this.userForm.reset();
  }

  setFormValues(response: any) {
    this.userForm.get('email')?.setValue(response.responseData.user.email);
    this.userForm.get('firstName')?.setValue(response.responseData.user.firstName);
    this.userForm.get('lastName')?.setValue(response.responseData.user.lastName);
    this.userForm.get('password')?.setValue("");
    this.userForm.get('gender')?.setValue(response.responseData.user.gender);
  }
}