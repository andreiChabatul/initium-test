import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { closeModal } from 'src/store/actions/modalActions';
import { selectModal } from 'src/store/selectors';
import { MODAL_NAME } from '../../const';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalName = MODAL_NAME;
  modal$ = this.store.select(selectModal);

  constructor(private store: Store<AppStore>) { }


  closeModal(): void {
    this.store.dispatch(closeModal());
  }

}
