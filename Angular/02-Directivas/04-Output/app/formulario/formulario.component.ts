import { Component, EventEmitter, Output} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersona(){
  let persona1 = new Persona (this.nombreInput, this.apellidoInput);
  //this.personas.push(persona1);
  this.personaCreada.emit(persona1); // Este metodo emit nos permite propagar informacion del componente hijo al padre.
  }


}

/*
Lo que hicimos es pasar el codigo html de formulario y los atributos nombre y apellido, y el método
porque ya corresponden al nuevo componente hijo.

Entonces al momento de crear un objeto de tipo persona debemos de pasarlo al componente padre para
que este lo despliegue.
Crearemos un nuevo objeto y que sea de tipo EventEmitter, mirar bien que se importe de angular/core, y esta clase se encarga de crear un mensaje
de poder comunicar la información que vamos a agregar en este componente hijo hacia el componente padre.
Y también debemos de indicar que el objeto que se va a crear es de tipo persona.

Ahora en el html del componente padre utilizaremos event binding para recibir el objeto de tipo persona1.
*/
