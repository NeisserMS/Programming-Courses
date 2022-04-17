import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent implements OnInit {

  title = "EJERCICIO DE CALCULADORA";

  numero1: number;
  numero2:number;
  resultado: number;

  constructor() {

   }

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  ngOnInit(): void {
  }

}
