import { createReducer, on } from "@ngrx/store";
import { modalState, modalStore, } from "src/app/types/store";
import * as modalActions from '../actions/modalActions';

const initalState: modalStore = {
    deleteUsers: [],
    modalState: ''
}

export const modalReducers = createReducer(initalState,
    on(modalActions.addDelete, (state, { payload }) => ({ ...state, deleteUsers: payload })),
    on(modalActions.closeModal, (state) => ({ ...state, modalState: '' as modalState })),
    on(modalActions.openModal, (state, { payload }) => ({ ...state, modalState: payload }))
)