import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './index.component.html'
})
export class DirectivangForComponent implements OnInit {

  title = 'Directativa ngFor';

  personas: Persona[] = [
    new Persona('Neisser', 'Moreno'),
    new Persona('Jair', 'Edinson')
  ];

  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersona(){
  let persona1 = new Persona (this.nombreInput, this.apellidoInput); // creamos un nuevo objeto con la información capturada.
  this.personas.push(persona1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
