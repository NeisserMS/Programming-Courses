import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
}) 

export class PersonaComponent {

   titulo = '';

  constructor() { }

  modificarTitulo(event: Event){
    console.log("Entrandodo al método");
    this.titulo = (<HTMLInputElement>event.target).value;

  }

}

// Target hace referencia al elemento html que estamos utilizando, osea al Input.
// Pero para acceder al valor de target necesitamos hacer un casting
