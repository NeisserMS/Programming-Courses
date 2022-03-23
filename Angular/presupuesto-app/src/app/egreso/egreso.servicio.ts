import { Egreso } from './egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso('pago de habitacion', 350),
    new Egreso('pago de luz', 80),
  ];

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
