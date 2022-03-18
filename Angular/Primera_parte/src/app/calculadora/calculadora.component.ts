import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo = 'Aprendiendo Angular';

  operandoA: any;
  operandoB: any;
  resultado: any;

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
