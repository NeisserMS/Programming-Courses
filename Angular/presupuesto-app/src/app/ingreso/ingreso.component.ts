import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  /* Necesitamos acceder a los arreglos de los elementos del arreglo de Ingreso para desplegarlo,
  en la plantilla HTML,  asi que para ello  creamos nuestras variables */

  ingresos: Ingreso[]=[]; // Definimos nuestra variable que apunta a nuestro modelo de ingreso.

  // Inyectamos una instancia, para ello utilizamos el servicio
  constructor(private ingresoServicio: IngresoServicio) { }

  //Aprovechamos este metodo de ngOnInit para inicializar nuestro arreglo
  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos; // Lo inicializamos el arreglo apoyandonos de nuestro servicio!
  }

  eliminarRegistro(ingreso: Ingreso){ // Estamos recibiendo una variable de tipo ingreso
    // Nos apoyaremos de nuestra clase de servicio para eliminar el registro.
    // asi que es necesario crear un metodo eliminar dentro de nuestro servicio de ingreso
    this.ingresoServicio.eliminarSer(ingreso);
  }
}
