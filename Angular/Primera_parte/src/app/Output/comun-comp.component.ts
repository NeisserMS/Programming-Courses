import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-comun-comp',
  templateUrl: './comun-comp.component.html'
})
export class ComunCompComponent implements OnInit {

  // Estos son los atributos que van a recibir la informacion que estamos pasando del componente padre hacia el hijo.
  // Como ya tenemos los atributos del componente padre podemos utilizarlo como si fueran de la clase hijo
  @Input() persona: Persona;
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
