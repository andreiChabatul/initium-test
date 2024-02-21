import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { user, userField } from 'src/app/types';
import { AppStore, tableStore } from 'src/app/types/store';
import { addDelete } from 'src/store/actions/modalActions';
import { selectAllUsers, selectTable } from 'src/store/selectors';

export interface itemUser {
  value: user;
  completed: boolean;
  subtasks?: itemUser[];
}


@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit, OnDestroy {

  usersTable: itemUser = {
    value: {} as user,
    completed: false,
    subtasks: [],
  };

  allComplete = false;
  subscription$: Subscription;
  subscriptionTwo$: Subscription;
  tableStore: tableStore | undefined;
  headerTable: userField[] = ['name', 'surname', 'email', 'phone'];
  tableStore$ = this.store.select(selectTable);

  constructor(private store: Store<AppStore>) { }

  users$: Observable<user[]> = this.store.select(selectAllUsers);

  ngOnInit(): void {
    this.subscription$ = this.users$.subscribe((users) =>
      this.usersTable.subtasks = users.map((user) => { return { value: user, completed: false } })
    );
    this.subscriptionTwo$ = this.tableStore$.subscribe((value) => this.tableStore = value);
  }

  updateAllComplete() {
    this.allComplete = this.usersTable.subtasks != null && this.usersTable.subtasks.every(t => t.completed);
    this.choiseUsers();
  }

  someComplete(): boolean {
    if (this.usersTable.subtasks == null) {
      return false;
    }
    return this.usersTable.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.usersTable.subtasks == null) {
      return;
    }
    this.usersTable.subtasks.forEach(t => (t.completed = completed));
    this.choiseUsers();
  }

  choiseUsers(): void {
    const choiseUsers = this.usersTable.subtasks?.filter((user) => user.completed)
      .map((item) => String(item.value?.email))
    if (choiseUsers) this.store.dispatch(addDelete({ payload: choiseUsers }));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
