import { createAction, props } from "@ngrx/store";
import { user } from "src/app/types";
import { modalState } from "src/app/types/store";

export enum modalActionsTypes {
    addDelete = '[ADD TO DELETE] addDelete',
    cleanDelete = '[CLEAN DELETE] cleanDelete',
    closeModal = '[CLOSE MODAL] closeModal',
    openModal = '[OPEN MODAL] openModal',
    openEdit = '[OPEN EDIT] openEdit',
}

export const closeModal = createAction(modalActionsTypes.closeModal);
export const cleanDelete = createAction(modalActionsTypes.cleanDelete);
export const addDelete = createAction(modalActionsTypes.addDelete,
    props<{ payload: string[] }>()
);
export const openModal = createAction(modalActionsTypes.openModal,
    props<{ payload: modalState }>()
);
export const openEdit = createAction(modalActionsTypes.openEdit,
    props<{ payload: user }>()
);


