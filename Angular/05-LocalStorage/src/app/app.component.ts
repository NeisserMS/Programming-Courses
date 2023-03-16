import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	// Soo almacena String, antes se usaban las Cookies, pero ahora es LocalStorage.

	constructor() {
		// this.grabar_localStorage(); // llamamos a la función y asi guarde en el localStorage
		this.obtener_localStorage();
	}

	// Método para obtener la información de localStorage
	obtener_localStorage() {

		// lo guardamos en una variable y utilizamos el método GetItem, luego le pasamos la llave.
		let Name = localStorage.getItem("nombre");
		console.log(Name);

		// No sirve porque nos trae como el string completo & nos dará un error de asignación, por lo que hemos tenid oque validarlo.
		// let objPersona = localStorage.getItem("Objeto Persona"); 

		// Necesitamos traerlo en forma de objeto y validar que no sea null antes de convertirlo a un objeto con JSON.parse().
		// Si es null imprimimos el mensaje, si no lo es lo convertimos a objeto.
		let objPersona = localStorage.getItem("Objeto Persona");
		if (objPersona !== null) {
			const objeto = JSON.parse(objPersona);
			console.log(objeto);
		} else {
			console.log("El objeto no existe en el local Storage");
		}
	}

	grabar_localStorage() { // una función para grabar en el localStorage

		let nombre: string = 'Neisser'; // Uan variable

		let persona = { // Un objeto
			nombre: 'Jair',
			edad: 29,
			coods: {
				lat: 10,
				lng: -10
			}
		}

		// Para GUARDAR utilizamos el setItem, dps pide la clave que puede ser cualquier nombre y el valor si es practicmaente la variable.
		localStorage.setItem("name", nombre);

		// Lanzará un error diciendo que no se puede asignar, por lo que necesitamos parsearlo.
		//localStorage.setItem("Objeto Persona", persona);

		// Esto lo convierte en un objeto JSON de forma String
		localStorage.setItem("Objeto Persona", JSON.stringify(persona));
	}
}
