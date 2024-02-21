import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { ButtonModule } from '../button/button.module';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { MaterialsModule } from '../materials/materials.module';
import { TableMainComponent } from './components/table-main/table-main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ItemTableHeaderComponent } from './components/item-table-header/item-table-header.component';
import { SortPipe } from './pipes/sortPipe';
import { SeacrhTableHeaderComponent } from './components/seacrh-table-header/seacrh-table-header.component';
import { FilterPipe } from './pipes/filterPipe';


@NgModule({
  declarations: [
    MainPageComponent,
    ItemTableComponent,
    TableMainComponent,
    ItemTableHeaderComponent,
    SortPipe,
    FilterPipe,
    SeacrhTableHeaderComponent,
  


  ],
  imports: [
    CommonModule,
    ButtonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MainPageComponent]

})
export class MainPageModule { }
