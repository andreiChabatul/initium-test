import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { userField } from 'src/app/types';
import { AppStore } from 'src/app/types/store';
import { setFilter } from 'src/store/actions/tableActions';

@Component({
  selector: 'app-seacrh-table-header',
  templateUrl: './seacrh-table-header.component.html',
  styleUrls: ['./seacrh-table-header.component.scss']
})
export class SeacrhTableHeaderComponent implements OnInit {

  @Input() field: userField | undefined;
  formSearch = new FormControl();

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.formSearch.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged())
      .subscribe((payload) =>
        this.store.dispatch(setFilter({ payload })))
  }
}
