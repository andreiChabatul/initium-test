import { user } from "..";

export interface AppStore {
    // modalStore: modalStore;
    usersStore: usersStore;
}

export type usersStore = {
    users: user[];
}