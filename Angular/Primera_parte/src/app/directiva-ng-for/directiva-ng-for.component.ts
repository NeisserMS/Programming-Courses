import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html'
})
export class DirectivaNgForComponent implements OnInit {

  title = 'Directativa ngFor';

  personas: Persona[] = [
    // new Persona('Neisser', 'Moreno'),
    // new Persona('Jair', 'Edinson')
  ];

  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersona(){
  let persona1 = new Persona (this.nombreInput, this.apellidoInput);
  this.personas.push(persona1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
