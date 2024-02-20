import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { UsersModule } from './users/users.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainPageModule,
    UsersModule,
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
