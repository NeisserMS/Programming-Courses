import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  // styleUrls: ['./persona.component.css'] // Esta es la manera de agregar estilo, un archivo aparte.

  //Esta es otra manera de agregar estilos.
  styles:[` 
            h1{
              color:blue;
              background:red;
            }`]
}) 

export class PersonaComponent {


  nombres = 'Neisser Arilson';
  private apellidos = 'Moreno Sanchez'; // no podemos invocarlo normalmente en el html porque es privado, para ello creamos el metodo getApellido

  constructor() { }

  getApellido():string{
    return this.apellidos;
  }

}
