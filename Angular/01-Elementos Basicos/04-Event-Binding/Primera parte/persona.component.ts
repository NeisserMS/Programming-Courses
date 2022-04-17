import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
}) 

export class PersonaComponent {

  mensaje='No se ha agregado a ninguna persona';

  constructor() { }

  agregarPersona(){

    this.mensaje = 'Persona agregada';
    
  }

}

