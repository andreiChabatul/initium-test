import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { UsersModule } from './users/users.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/store';
import { ModalModule } from './modal/modal.module';
import { EFFECTS } from 'src/store/effects';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainPageModule,
    UsersModule,
    EffectsModule.forRoot(EFFECTS),
    StoreModule.forRoot(appReducers),
    ModalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
