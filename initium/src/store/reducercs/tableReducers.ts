import { createReducer, on } from "@ngrx/store";
import { tableStore, } from "src/app/types/store";
import * as tableActions from '../actions/tableActions';

const initalState: tableStore = {
}

export const tableReducers = createReducer(initalState,
    on(tableActions.setSortTable, (state, { payload }) => ({ ...state, sortTable: payload })),
    on(tableActions.setFilter, (state, { payload }) => ({ ...state, filter: payload })),

)