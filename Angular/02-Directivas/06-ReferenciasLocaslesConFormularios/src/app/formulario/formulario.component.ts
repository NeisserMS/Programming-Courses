import { Component, EventEmitter, Output} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string = "";
  // apellidoInput:string = "";

  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
    let persona1 = new Persona (nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona1);
    }

  // debemos indicar el tipo de propieda dque estamos pasando desde el html.
  // Extramos el valor del componente input en el html con value.

  // agregarPersona(){
  // let persona1 = new Persona (this.nombreInput, this.apellidoInput);
  // this.personaCreada.emit(persona1);
  // }


}

