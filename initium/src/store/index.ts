
import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { usersReducers } from './reducercs/usersReducers';
import { modalReducers } from './reducercs/modalReducers';
import { tableReducers } from './reducercs/tableReducers';

export const appReducers: ActionReducerMap<AppStore, any> = {
    usersStore: usersReducers,
    modalStore: modalReducers,
    tableStore: tableReducers
};