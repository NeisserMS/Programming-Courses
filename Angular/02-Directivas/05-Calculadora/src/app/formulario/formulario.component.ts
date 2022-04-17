import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  operandoA: number;
  operandoB: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
    // this.resultado = this.operandoA + this.operandoB;
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }

}
