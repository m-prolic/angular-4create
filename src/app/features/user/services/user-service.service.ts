import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from '../models/user.model';
import { URL_LIST } from 'src/app/core/constants/URL_LIST';
import { UserStore } from 'src/app/store/user.store';
import { users } from 'src/app/core/constants/USERS_MOCK';
import { AppConfig } from 'src/app/core/models/config.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(
    private _userStore: UserStore,
    private _apiService: ApiService,
    private _appConfig: AppConfig
  ) {}

  getUsers(): void {
    if (this._appConfig.mock) {
      this._apiService.get<User[]>(URL_LIST.users).subscribe(
        (users) => {
          this._userStore.set(users);
        },
        (error) => console.error(error)
      );
    } else {
      return this._userStore.set(users);
    }
  }

  addUser(newUser: User): void {
    if (!this._appConfig.mock) {
      this._apiService.post(URL_LIST.users, newUser).subscribe((res) => {
        console.log('added');
      });
    } else {
      this._userStore.add(newUser);
    }
  }
}
