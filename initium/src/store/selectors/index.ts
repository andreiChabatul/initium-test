
import { createSelector } from "@ngrx/store";
import { AppStore, modalStore, usersStore } from "src/app/types/store";


const selectUsersStore = (state: AppStore) => state.usersStore;
const selectModalStore = (state: AppStore) => state.modalStore;

export const selectAllUsers = createSelector(selectUsersStore, (state: usersStore) => state.users);
export const selectModal = createSelector(selectModalStore, (state: modalStore) => state);