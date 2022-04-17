import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
}) 

export class PersonaComponent {

  titulo = '';

  // Este valor se ve refleado en el HTML como placeholder
  // titulo = 'Ingeniero'; 

  constructor() { }


}
