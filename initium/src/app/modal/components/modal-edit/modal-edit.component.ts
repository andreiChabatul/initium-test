import { Component, Input } from '@angular/core';
import { user } from 'src/app/types';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {

  @Input() editUser: user | undefined;

}
