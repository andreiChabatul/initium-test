import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { userField } from 'src/app/types';
import { AppStore, sortTable, typeSort } from 'src/app/types/store';
import { setSortTable } from 'src/store/actions/tableActions';
import { TABLE_NAME } from '../../const';

@Component({
  selector: 'app-item-table-header',
  templateUrl: './item-table-header.component.html',
  styleUrls: ['./item-table-header.component.scss']
})
export class ItemTableHeaderComponent {

  @Input() field: userField;
  @Input() tableSort: sortTable | null | undefined;
  typeSort: typeSort = 'ASC';
  tableName = TABLE_NAME;

  constructor(private store: Store<AppStore>) { }

  clickSort(): void {
    this.changeSort()
    this.store.dispatch(setSortTable({ payload: { field: this.field, type: this.typeSort } }))
  }

  changeSort() {
    this.typeSort = (this.typeSort === 'ASC' ? 'DESC' : 'ASC');
  }

  isDESC(): boolean {
    return this.typeSort === 'DESC';
  }

  isField(): boolean {
    return this.tableSort?.field === this.field;
  }

}
