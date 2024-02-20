import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMaterialComponent } from './components/button-material/button-material.component';
import { ButtonControllerService } from './services/button-controller';


@NgModule({
  declarations: [
    ButtonMaterialComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonMaterialComponent
  ],
  providers: [ButtonControllerService]
})
export class ButtonModule { }
