import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_USERS } from 'src/app/const';
import { ResponseServer, user } from 'src/app/types';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { addUsers } from 'src/store/actions/usersActions';
import { selectAllUsers } from 'src/store/selectors';
import { KEY_LOCAL } from 'src/app/button/const';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: user[];

  constructor(private hhtpClient: HttpClient, private store: Store<AppStore>) {
    this.store.select(selectAllUsers).subscribe((users) => this.users = users);
  }

  getUsers(): void {
    this.hhtpClient.get<ResponseServer>(URL_USERS).subscribe({
      next: (response) => this.store.dispatch(addUsers({ payload: response.users })),
      error: (error: HttpErrorResponse) => console.log(error)
    });
  
  }

  setLocalStorage(): void {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(this.users))
  }

  getLocalStorage(): user[] | undefined {
    const users = localStorage.getItem(KEY_LOCAL);
    return users ? JSON.parse(users) : undefined;
  }

}