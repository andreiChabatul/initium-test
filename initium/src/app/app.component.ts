import { Component, OnInit } from '@angular/core';
import { UsersService } from './users/services/users.service';
import { Store } from '@ngrx/store';
import { AppStore } from './types/store';
import { addUsers } from 'src/store/actions/usersActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'initium';


  constructor(private userService: UsersService, private store: Store<AppStore>) { }

  ngOnInit(): void {

    const users = this.userService.getLocalStorage();

    if (!users || users.length === 0) {
      this.userService.getUsers();
    } else {
      this.store.dispatch(addUsers({ payload: users }))
    }

  }

}
