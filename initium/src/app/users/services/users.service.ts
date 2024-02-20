import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_USERS } from 'src/app/const';
import { ResponseServer } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private hhtpClient: HttpClient) { }

  getUsers(): void {
    this.hhtpClient.get<ResponseServer>(URL_USERS).subscribe({
      next: (response) => { console.log(response.users) },
      error: (error: HttpErrorResponse) => { }
    });
  }

}
