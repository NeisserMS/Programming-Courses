import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'ViewChild';

  // el static es para indicar si ese boton depende de un ngIf, si es asi entpnces no es estatico. Para este caso si lo es-
  // Primero en comillas va el nombre de la referencia, si es estatico y dps un nombre que puede ser cualquiera.
  @ViewChild('btnNombre', { static: true }) nombre: ElementRef; // Colocar elementRef en caso sea un elemento HTML

  // ngOnInit() {
  //   console.log(this.nombre.nativeElement); // Por consola veremos que nos devuelve el Input completo, osea todo el codigo.
  //   console.log(this.nombre.nativeElement.value); // Aqu+i obtenemos el valor que tiene
  // }

  // Este es otro ejemplo:
  // Haremos un ViewChild para otro componente-

  // Ya no es la referencia, sino el nombre de la clase. 
  @ViewChild(FormularioComponent, { static: true }) hijo: FormularioComponent;

  ngOnInit() { // De igual manera podemos acceder a todo lo que tiene el componente hijo, includo sus servicios.
    console.log('ViewChild-Hijo: ', this.hijo);
  }

  // Metodo para cambiar el titulo

  changeTitle() {
    this.hijo.titulo = "Click en el Padre pero Cambio el nombre del titulo del Hijo";
  }

  // Metodo para enviar el saludo q esta en el componente hijo
  MandandoSaludo() {
    this.hijo.saludo();
  }

  // Tambien podemos ejecutar metodos desde la variables local

}

