
import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { usersReducers } from './reducercs/usersReducers';

export const appReducers: ActionReducerMap<AppStore, any> = {
    usersStore: usersReducers
};