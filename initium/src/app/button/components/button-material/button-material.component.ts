import { Component, Input } from '@angular/core';
import { buttonsType } from 'src/app/types';
import { ButtonControllerService } from '../../services/button-controller';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/store';
import { selectModal } from 'src/store/selectors';
import { Observable, map } from 'rxjs';
import { BUTTONS_NAME } from '../../const';

@Component({
  selector: 'app-button-material',
  templateUrl: './button-material.component.html',
  styleUrls: ['./button-material.component.scss']
})
export class ButtonMaterialComponent {

  @Input() typeButton: buttonsType;
  modal$ = this.store.select(selectModal);
  buttonsName = BUTTONS_NAME;

  constructor(private buttonControllerService: ButtonControllerService, private store: Store<AppStore>) { }

  clickButton(typeButton: buttonsType) {
    this.buttonControllerService.actionButton(typeButton);
  }

  checkDisableDelete(): Observable<boolean> {
    return this.modal$.pipe((
      map((modal) => this.typeButton === 'delete' && modal.deleteUsers.length === 0)
    ))
  }

  isMaterialButton(): boolean {
    return ['add_box', 'delete'].includes(this.typeButton);
  }

  isBlueButton(): boolean {
    return ['save', 'deleteBlue'].includes(this.typeButton);
  }

  isNoFonButton(): boolean {
    return ['cancel'].includes(this.typeButton);
  }

}
