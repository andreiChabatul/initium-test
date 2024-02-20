import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ButtonModule } from '../button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsersComponent } from './components/form-users/form-users.component';




@NgModule({
  declarations: [
    ModalComponent,
    ModalDeleteComponent,
    FormUsersComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent
  ]

})
export class ModalModule { }
