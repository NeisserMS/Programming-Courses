import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string = "";
  // apellidoInput:string = "";

  @ViewChild('nombreInput') newNombreInput: ElementRef;
  @ViewChild('apellidoInput') newApellidoInput: ElementRef;


  agregarPersona(){
    let persona1 = new Persona (this.newNombreInput.nativeElement.value, this.newApellidoInput.nativeElement.value);
    this.personaCreada.emit(persona1);
    }

  /*
  Lo que esta entre comillas es la referencia que salvamos del HTML y creamos una nueva diciendole que
  sera de tipo ElementRef.
  es necesario agregar el nativeElement para recuperar el valor de la plantilla cuando usamos ViewChild.

  */


}

