import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { buttonsType } from 'src/app/types';
import { AppStore, modalStore } from 'src/app/types/store';
import { closeModal, openModal } from 'src/store/actions/modalActions';
import { deleteUsers } from 'src/store/actions/usersActions';
import { selectModal } from 'src/store/selectors';

@Injectable({
    providedIn: 'root'
})

export class ButtonControllerService {

    modal$ = this.store.select(selectModal);
    modal: modalStore;
    constructor(private store: Store<AppStore>) {
        this.modal$.subscribe((modal) => this.modal = modal)
    }

    actionButton(action: buttonsType) {
        switch (action) {
            case 'delete':
                this.store.dispatch(openModal({ payload: 'delete' }))
                break;

            case 'add_box':
                this.store.dispatch(openModal({ payload: 'new' }))
                break;

            case 'cancel':
                this.store.dispatch(closeModal())
                break;

            case 'deleteBlue':
                this.store.dispatch(deleteUsers({ payload: this.modal.deleteUsers }));
                break;

            default:
                break;
        }
    }


}