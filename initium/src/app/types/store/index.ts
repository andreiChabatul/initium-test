import { user, userField } from "..";

export type modalState = 'new' | 'delete' | 'edit' | '';
export type typeSort = 'ASC' | 'DESC';

export interface AppStore {
    modalStore: modalStore;
    usersStore: usersStore;
    tableStore: tableStore;
}

export type usersStore = {
    users: user[];
}

export type tableStore = {
    sortTable?: sortTable;
    filter?: string;
}

export type modalStore = {
    deleteUsers: string[];
    modalState: modalState;
    editUser?: user;
}

export type sortTable = {
    field: userField;
    type: typeSort;
}