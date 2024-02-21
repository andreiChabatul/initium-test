import { createReducer, on } from "@ngrx/store";
import { usersStore } from "src/app/types/store";
import * as userActions from '../actions/usersActions';

const initalState: usersStore = {
    users: []
}

export const usersReducers = createReducer(initalState,
    on(userActions.addUsers, (state, { payload }) => ({ users: [...state.users, ...payload] })),
    on(userActions.deleteUsers, (state, { payload }) => (
        { users: state.users.filter((user) => !(payload.includes(user.email))) })),
    on(userActions.updateUser, (state, { payload }) => ({
        users: state.users.map((user) => (
            user.email === payload.email
            || user.name === payload.name
            || user.phone === payload.phone
            || user.surname === payload.surname
        )
            ? payload
            : user)
    })),

)