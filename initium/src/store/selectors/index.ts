
import { createSelector } from "@ngrx/store";
import { AppStore, usersStore } from "src/app/types/store";


const selectUsers = (state: AppStore) => state.usersStore;

export const selectAllUsers = createSelector(selectUsers, (state: usersStore) => state.users);