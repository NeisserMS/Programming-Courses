import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  desabilitar = false; // Property Binding
  nombres = 'Neisser Arilson';
  private apellidos = 'Moreno Sanchez'; // no podemos invocarlo normalmente en el html porque es privado, para ello creamos el metodo getApellido
  mensaje = 'No se ha agregado a ningun Usuario'; /* Eventos Binding */
  titulo = '';

  getApellido():string{
    return this.apellidos;
  }

  /* Event Binding */
  agregarUsuario(){
    this.mensaje = 'Usuario agregado';
  }

  /* Continuación de Event Binding */
  modificarTitulo(event: Event){
    console.log('Entrando al metodo modificar titulo');
    this.titulo = (<HTMLInputElement>event.target).value; // Se le hace un casting (conversión para poder acceder al atributo de value).
    //Nota: para Two way Binding este metodo ya no es necesario.
  }


  constructor() { }

  ngOnInit(): void {
  }

}
