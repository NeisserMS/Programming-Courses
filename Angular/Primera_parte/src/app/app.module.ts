import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './elementos-basicos/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { ComunCompComponent } from './Output/comun-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CalculadoraComponent,
    DirectivasComponent,
    DirectivaNgForComponent,
    ComunCompComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
