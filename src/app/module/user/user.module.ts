import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }