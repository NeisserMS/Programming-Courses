import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListasUsersComponent } from './listas-users/listas-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListasUsersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
