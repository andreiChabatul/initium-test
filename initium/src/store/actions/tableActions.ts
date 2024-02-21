import { createAction, props } from "@ngrx/store";
import { sortTable } from "src/app/types/store";

export enum tableActionsTypes {
    setSortTable = '[SORT TABLE] setSortTable',
    setFilter = '[SET FILTER] setFilter',

}

export const setSortTable = createAction(tableActionsTypes.setSortTable,
    props<{ payload: sortTable }>()
);
export const setFilter = createAction(tableActionsTypes.setFilter,
    props<{ payload: string }>()
);



