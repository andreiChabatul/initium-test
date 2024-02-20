import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCheckboxModule
  ]
})
export class MaterialsModule { }
