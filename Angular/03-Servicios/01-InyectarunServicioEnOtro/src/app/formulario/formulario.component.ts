import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  
  //@Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput') nombreInput: ElementRef ;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService:LoggingService,
    private personaService:PersonasService){}

  agregarPersona(){
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value, 
      this.apellidoInput.nativeElement.value);
    //this.loggingService.enviaMensajeAConsola('Enviamos persona con nombre:' + persona1.nombre + ', apellido:' + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }

}
