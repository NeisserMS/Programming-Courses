import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl:'./index.component.html',
})

export class PersonasComponent implements OnInit{

  @Input() personas: Persona;
  @Input() in:number;

  constructor(){}

  ngOnInit(): void {

  }

}

