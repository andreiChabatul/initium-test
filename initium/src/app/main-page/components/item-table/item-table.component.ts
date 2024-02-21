import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { user } from 'src/app/types';
import { AppStore } from 'src/app/types/store';
import { openEdit } from 'src/store/actions/modalActions';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent {

  @Input() user: user | undefined;

  constructor(private store: Store<AppStore>) { }

  openEdit() {
    if (this.user) this.store.dispatch(openEdit({ payload: this.user }));
  }
}
