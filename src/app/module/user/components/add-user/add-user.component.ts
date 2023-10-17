import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.formInit();
  }

  enterFirstName: string = 'Enter First Name';
  enterLastName: string = 'Enter Last Name';
  enterEmail: string = 'Enter User Email';
  enterPassword: string = 'Enter User Password';

  user?: User;
  responseCode?: string;
  responseMessage: string = 'Please Enter User Details';

  userForm!: FormGroup;

  formInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const userPayLoad = this.userForm.value;
      this._userService.saveUser(userPayLoad).subscribe((response: any) => {
        if (response.responseCode === 'SUCCESS_201') {
          this.responseCode = response.responseCode;
          this.responseMessage = response.responseMessage;
          this.user = response.responseData.user;
          this.resetFormValues();
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

  resetFormValues() {
    this.userForm.reset();
  }
}