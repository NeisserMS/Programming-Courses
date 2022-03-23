import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Utilizaremos los arreglos de los servicios que hemos declarado
  // Posteriormente estos arreglos lo vamos a inciializar en el constructor con los elementos que provienen del servicio.
  ingresoPrin: Ingreso[] = [];
  egresoPrin: Egreso[] = [];

  // Inyectaremos una dependencia de los servicios de ingreso como de egreso
  // Esto es necesario para obtener el presupuesto total, ingreso total y eñ egreso total.
  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {
    // Iniciremos los atributos de la clase
    this.ingresoPrin = ingresoServicio.ingresos; // va a ser igual a el ingreso servicio que he creado.el nombre de mi arreglo que esta en el servicio
    this.egresoPrin = egresoServicio.egresos;
  }

  // definir atributos y Método para obtener el Ingreso total inicialmente
  // El ingreso total se compone con la suma de cada uno de los elementos del arreglo de ingresos
  /* Se tiene que recorrer cada uno de los elementos y posteriormente sumarlo a la variable ingreso total */
  getIngresoTotal() {
    let ingresoTotal: number = 0;
    /* Usamos el arreglo ingresoPrin y el metodo ForEach, y por cada uno de los elementos se usa la funcion de flecha,
     para luego sumar el ingresoTotal y ir sumando cada uno de los valores del arreglo. */
    this.ingresoPrin.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
      // ingresoTotal = ingresoTotal + ingreso.valor;
    });
    return ingresoTotal; // Como ya tenemos el ingreso total, lo retornamos.
  }

  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresoPrin.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  // Método para saber el porcentaje total (egreso comparado con el ingreso)
  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
