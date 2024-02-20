import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMaterialComponent } from './components/button-material/button-material.component';


@NgModule({
  declarations: [ButtonMaterialComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonMaterialComponent
  ]
})
export class ButtonModule { }
