import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { faMars, faPencil, faTrash, faVenus } from '@fortawesome/free-solid-svg-icons';

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
  user!: User;

  responseCode?: string;
  responseMessage?: string;

  deleteIcon = faTrash;
  updateIcon = faPencil;

  maleIcon = faMars;
  femaleIcon = faVenus;

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

  deleteUser(email: string) {
    const userEmail = email;
    this._userService.deleteUser(userEmail).subscribe((response: any) => {
      if (response.responseCode === 'SUCCESS_205') {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.user = response.responseData.user;
        this.getUsers();
      } else {
        this.responseCode = response.responseCode;
        this.responseMessage = response.responseMessage;
        this.user = response.responseData.user;
      }
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  onDelete(email: any) {
    this.deleteUser(email);
  }

  onUpdate(email: any) {
    this._router.navigate(['user/update', email]);
  }
}