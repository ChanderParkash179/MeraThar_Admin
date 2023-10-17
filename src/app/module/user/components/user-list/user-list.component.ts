import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private _userService: UserService, private _router: Router) { }

  users?: User[] = [];

  responseCode?: string;
  responseMessage?: string;

  getUsers() {
    this._userService.fetchUsers().subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_200') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.users = response.responseData.users;
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  addUser() {
    this._router.navigate(['user/add']);
  }
}