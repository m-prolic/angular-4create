import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserStore } from 'src/app/store/user.store';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private userStore: UserStore,
    private _userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this._userService.getUsers();
  }
}
