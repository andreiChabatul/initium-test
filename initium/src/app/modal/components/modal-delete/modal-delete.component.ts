import { Component, Input } from '@angular/core';
import { buttonsType } from 'src/app/types';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {

  @Input() amountStr: number;
  buttons: buttonsType[] = ['cancel', 'deleteBlue'];

}
