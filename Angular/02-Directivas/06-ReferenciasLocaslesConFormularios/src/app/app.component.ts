import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  title = 'Directativa INPUT';

  personas: Persona[] = [
    new Persona('Neisser', 'Moreno'),
    new Persona('Jair', 'Edinson')
  ];

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }

}

