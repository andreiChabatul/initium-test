import { Pipe, PipeTransform } from '@angular/core';
import { itemUser } from '../components/table-main/table-main.component';
import { userField } from 'src/app/types';
import { tableStore } from 'src/app/types/store';

@Pipe({
    name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

    transform(value: itemUser[], tableStore: tableStore | undefined): itemUser[] {
        if (tableStore && tableStore.filter && tableStore.sortTable) {
            const filter = tableStore.filter.toLowerCase();
            const field = tableStore.sortTable?.field;
            return value.filter((user) => user.value[field].toLowerCase().includes(filter))
        } else {
            return value;
        }

    }

}
