import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from 'src/app/types';
import { AppStore } from 'src/app/types/store';
import { selectAllUsers } from 'src/store/selectors';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {

  constructor(private store: Store<AppStore>) { }

  users$: Observable<user[]> = this.store.select(selectAllUsers);

}
