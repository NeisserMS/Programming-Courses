import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Vendí mi guitarra', 500),
  ];

  // Este metodo lo usaremos en el ingreso.component
  eliminarSer(ingreso: Ingreso){
    /* Lo definimos como una constante porque dps de inicializar ya no va a cambiar.
       El IndexOf pertenece al arreglo y lo usamos para que nos regrese le indice del objeto que estamos recibiendo */
      const indice: number = this.ingresos.indexOf(ingreso);
      // una vez mnos regresa el indice podemos eliminar el registro:
      this.ingresos.splice(indice, 1);
  }


}


/* NOTAS:
ingresos = arreglo
Utilizamos el metodo splice con el cual podemos indicar que indice queremos eliminar y le pasamos
el parametro 1 para decirle cuantos elementos queremos eliminar a apartir del indice que estamos indicando.
*/
