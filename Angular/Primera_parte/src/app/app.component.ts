import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Property Binding entre componente utilizando iutput';
  
  personas: Persona[] = [
     new Persona('Neisser', 'Moreno'),
     new Persona('Jair', 'Edinson'),
     new Persona('Junior', 'Moreno')

  ];

  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersona(){
  let persona1 = new Persona (this.nombreInput, this.apellidoInput);
  this.personas.push(persona1);
  }


  constructor() {}

  ngOnInit() {}
}
