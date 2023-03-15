import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-users',
  templateUrl: './listas-users.component.html',
  styleUrls: ['./listas-users.component.css']
})
export class ListasUsersComponent implements OnInit {

  activo: any;

  fondo: any;

  constructor() { }

  ngOnInit() {

  }

  Paises = [
    { Nombre: 'Perú' },
    { Nombre: 'Venezuela' },
    { Nombre: 'Uruguay' },
    { Nombre: 'Colombia' }
  ]

}
