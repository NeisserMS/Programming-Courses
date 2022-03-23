import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  /* Los elementos que queremos recibir del elemento padre son: presupeustoT, IngresoT, egresoT y porcentajeT, por ellos
     definimos nuestras variables  */
  /* Para poder recibir informacion de otro componente a este  cabecero necesitamos el decoraador Input */
  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
