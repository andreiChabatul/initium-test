import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_USERS } from 'src/app/const';
import { ResponseServer } from 'src/app/types';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { addUsers } from 'src/store/actions/usersActions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private hhtpClient: HttpClient, private store: Store<AppStore>) { }

  getUsers(): void {
    this.hhtpClient.get<ResponseServer>(URL_USERS).subscribe({
      next: (response) => this.store.dispatch(addUsers({ payload: response.users })),
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }

}
