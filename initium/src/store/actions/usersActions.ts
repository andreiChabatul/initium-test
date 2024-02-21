import { createAction, props } from "@ngrx/store";
import { user } from "src/app/types";

export enum userActionsTypes {
    AddUsers = '[ADD USERS] AddUsers',
    DeleteUsers = '[DELETE USERS] DeleteUsers',
    SaveUser = '[SAVE USER] SaveUser',
    updateUser = '[UPDATE USER] updateUser',
}

export const addUsers = createAction(userActionsTypes.AddUsers,
    props<{ payload: user[] }>()
);
export const deleteUsers = createAction(userActionsTypes.DeleteUsers,
    props<{ payload: string[] }>()
);
export const saveUser = createAction(userActionsTypes.SaveUser,
    props<{ payload: { user: user, newUser: boolean } }>()
);
export const updateUser = createAction(userActionsTypes.updateUser,
    props<{ payload: user }>()
);

