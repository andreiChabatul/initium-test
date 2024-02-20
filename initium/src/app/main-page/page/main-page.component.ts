import { Component } from '@angular/core';
import { buttonsType } from 'src/app/types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  buttonsHeader: buttonsType[] = ['add_box', 'delete'];

}
