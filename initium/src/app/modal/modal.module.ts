import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ButtonModule } from '../button/button.module';




@NgModule({
  declarations: [
    ModalComponent,
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ModalComponent
  ]

})
export class ModalModule { }
