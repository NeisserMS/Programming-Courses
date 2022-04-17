import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona.model';

@Component({
  selector: 'app-directiva-ng-If',
  templateUrl: './directiva-ng-If.component.html'
})
export class DirectivangIfComponent implements OnInit {

   mensaje = "";
   mostrar = false; // Lo inicializamos en false.

  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(){
    this.mostrar = true; // Cuando se haga click que se vuelva verdadero.
    this.mensaje = "Persona agregada";
    console.log("Persona agregada");
  }
}
