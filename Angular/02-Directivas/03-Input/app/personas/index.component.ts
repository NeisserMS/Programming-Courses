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

/*
Si te marca error en "personas" es porque te dice que debes de inicializar el objeto, si en todo caso
no quieres puedes ir a tu archivo tsconfig.json y dentro de compilerOpstions agregamos: "strictPropertyInitialization": false,
*/
