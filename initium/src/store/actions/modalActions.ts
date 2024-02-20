import { createAction, props } from "@ngrx/store";
import { modalState } from "src/app/types/store";

export enum modalActionsTypes {
    addDelete = '[ADD TO DELETE] addDelete',
    closeModal = '[CLOSE MODAL] closeModal',
    openModal = '[OPEN MODAL] openModal',
}

export const closeModal = createAction(modalActionsTypes.closeModal);
export const addDelete = createAction(modalActionsTypes.addDelete,
    props<{ payload: string[] }>()
);
export const openModal = createAction(modalActionsTypes.openModal,
    props<{ payload: modalState }>()
);


