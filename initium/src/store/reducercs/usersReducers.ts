import { createReducer, on } from "@ngrx/store";
import { usersStore } from "src/app/types/store";
import * as userActions from '../actions/usersActions';

const initalState: usersStore = {
    users: []
}

export const usersReducers = createReducer(initalState,
    on(userActions.addUsers, (_, { payload }) => ({ users: payload })),
    on(userActions.deleteUsers, (state, { payload }) => (
        { users: state.users.filter((user) => !(payload.includes(user.email))) })),

)