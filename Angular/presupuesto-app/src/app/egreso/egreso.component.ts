import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

   egresos:Egreso[]=[]; // arreglo de egresos
   @Input() ingresoTotal:number;

  constructor(private egresoServicio:EgresoServicio) { } // Inyectamos el servicio

  ngOnInit(){ // Inicializamos el arreglo
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje( egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
