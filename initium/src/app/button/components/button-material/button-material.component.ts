import { Component, Input } from '@angular/core';
import { buttonsType } from 'src/app/types';

@Component({
  selector: 'app-button-material',
  templateUrl: './button-material.component.html',
  styleUrls: ['./button-material.component.scss']
})
export class ButtonMaterialComponent {

  @Input() typeButton: buttonsType;

  clickButton(typeButton: buttonsType) {

  }

}
