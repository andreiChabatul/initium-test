import { createAction, props } from "@ngrx/store";
import { user } from "src/app/types";

export enum userActionsTypes {
    AddUsers = '[ADD USERS] AddUsers',
    DeleteUsers = '[DELETE USERS] DeleteUsers',
}

export const addUsers = createAction(userActionsTypes.AddUsers,
    props<{ payload: user[] }>()
);
export const deleteUsers = createAction(userActionsTypes.DeleteUsers,
    props<{ payload: string[] }>()
);

