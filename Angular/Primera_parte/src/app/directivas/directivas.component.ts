import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent implements OnInit {
  desabilitar = false;

  // mensaje = 'No se ha agregado a ningun Usuario';
  mensaje = ' '; //ngIf con condicion
  titulo = 'Ingeniero';
  mostrar = false; // nfIf

  agregarUsuario() {
    this.mostrar = true; //cambiamos el estadp a verdadero (ngIf)
    this.mensaje = 'Usuario agregado';
  }

  modificarTitulo(event: Event) {
    console.log('Entrando al metodo modificar titulo');
    this.titulo = (<HTMLInputElement>event.target).value;
  }

  constructor() {}

  ngOnInit(): void {}
}
