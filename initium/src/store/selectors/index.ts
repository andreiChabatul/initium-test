
import { createSelector } from "@ngrx/store";
import { AppStore, modalStore, tableStore, usersStore } from "src/app/types/store";


const selectUsersStore = (state: AppStore) => state.usersStore;
const selectModalStore = (state: AppStore) => state.modalStore;
const selectTableStore = (state: AppStore) => state.tableStore;

export const selectAllUsers = createSelector(selectUsersStore, (state: usersStore) => state.users);
export const selectModal = createSelector(selectModalStore, (state: modalStore) => state);
export const selectTableSort = createSelector(selectTableStore, (state: tableStore) => state.sortTable);
export const selectTable = createSelector(selectTableStore, (state: tableStore) => state);