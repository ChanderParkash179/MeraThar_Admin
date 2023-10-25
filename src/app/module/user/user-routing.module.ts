import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: '', component: UserListComponent },
      { path: 'list', component: UserListComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'update/:email', component: UpdateUserComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
