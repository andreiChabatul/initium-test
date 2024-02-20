import { Component, Input } from '@angular/core';
import { user } from 'src/app/types';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent {

  @Input() user: user | undefined;

}
