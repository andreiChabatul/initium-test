import { Pipe, PipeTransform } from '@angular/core';
import { itemUser } from '../components/table-main/table-main.component';
import { Store } from '@ngrx/store';
import { AppStore, sortTable } from 'src/app/types/store';
import { selectTableSort } from 'src/store/selectors';
import { userField } from 'src/app/types';

@Pipe({
    name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

    sortTable$ = this.store.select(selectTableSort);

    constructor(private store: Store<AppStore>) { }

    transform(value: itemUser[], sortTable: sortTable | undefined): itemUser[] {

        if (sortTable) {
            const type = sortTable.type
            const field = sortTable.field;
            return (type === 'ASC')
                ? this.sortASC(value, field)
                : this.sortDESC(value, field)
        } else {
            return value;
        }

    }

    sortASC(value: itemUser[], field: userField): itemUser[] {
        return value.sort((user1, user2) => user2.value[field].localeCompare(user1.value[field]));
    }

    sortDESC(value: itemUser[], field: userField): itemUser[] {
        return value.sort((user1, user2) => user1.value[field].localeCompare(user2.value[field]));
    }
}
