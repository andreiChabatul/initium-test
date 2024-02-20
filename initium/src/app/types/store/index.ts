import { user } from "..";

export type modalState = 'new' | 'delete' | 'edit' | 'reconnect' | '';

export interface AppStore {
    modalStore: modalStore;
    usersStore: usersStore;
}

export type usersStore = {
    users: user[];
}

export type modalStore = {
    deleteUsers: string[];
    modalState: modalState;
}