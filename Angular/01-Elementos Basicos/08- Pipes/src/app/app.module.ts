import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListasUsersComponent } from './listas-users/listas-users.component';
import { SortConditionPipe } from './pipes/sort-condition.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { UserTimePipe } from './pipes/user-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListasUsersComponent,
    UpperCasePipe,
    SortPipe,
    SortConditionPipe,
    UserTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
