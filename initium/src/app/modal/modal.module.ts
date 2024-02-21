import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ButtonModule } from '../button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { MaterialsModule } from '../materials/materials.module';
import { ModalAddComponent } from './components/modal-add/modal-add.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';




@NgModule({
  declarations: [
    ModalComponent,
    ModalDeleteComponent,
    FormUsersComponent,
    ModalAddComponent,
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    MaterialsModule
  ],
  exports: [
    ModalComponent
  ]

})
export class ModalModule { }
