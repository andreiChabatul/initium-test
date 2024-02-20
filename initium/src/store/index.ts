
import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { usersReducers } from './reducercs/usersReducers';
import { modalReducers } from './reducercs/modalReducers';

export const appReducers: ActionReducerMap<AppStore, any> = {
    usersStore: usersReducers,
    modalStore: modalReducers
};