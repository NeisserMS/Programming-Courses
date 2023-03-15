import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-users',
  templateUrl: './listas-users.component.html',
  styleUrls: ['./listas-users.component.css']
})
export class ListasUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  lista = [
    { id: 1, nombre: 'neisser', apellido: 'Moreno', cargo: 'Dev', tiempo: '11-04-22 07:07:53' },
    { id: 2, nombre: 'jair', apellido: 'Moreno', cargo: 'Contador', tiempo: '11-04-22 13:07:53 UTC' },
    { id: 3, nombre: 'karen', apellido: 'Moreno', cargo: 'Turismo', tiempo: '11-04-22 12:07:53 UTC' },
    { id: 4, nombre: 'junior', apellido: 'Moreno', cargo: 'Chef', tiempo: '11-08-25 13:07:53 UTC' },
    { id: 5, nombre: 'jordi', apellido: 'Moreno', cargo: 'Estudiante', tiempo: '11-06-11 17:07:53 UTC' },
    { id: 6, nombre: 'gerson', apellido: 'Moreno', cargo: 'Calichin', tiempo: '' }
  ]

}
