import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddUserComponent } from './components/add-user/add-user.component';



@NgModule({
  declarations: [
    UserTableComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
