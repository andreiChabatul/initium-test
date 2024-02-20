import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { ButtonModule } from '../button/button.module';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { MaterialsModule } from '../materials/materials.module';
import { TableMainComponent } from './components/table-main/table-main.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ItemTableComponent,
    TableUsersComponent,
    TableMainComponent

  ],
  imports: [
    CommonModule,
    ButtonModule,
    MaterialsModule,
    FormsModule
  ],
  exports: [MainPageComponent]

})
export class MainPageModule { }
