import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  titulo = "Propiedad del componente Hijo"

  saludo() {
    console.log('Hola Mundo');
  }

}

