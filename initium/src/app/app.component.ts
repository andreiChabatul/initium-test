import { Component, OnInit } from '@angular/core';
import { UsersService } from './users/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'initium';


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers();
  }

}
