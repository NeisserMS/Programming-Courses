"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Hola desde el archivo app");
let lista = ["Juan", "Pedro", "Luis"];
for (const iterator of lista) {
    console.log(iterator);
}
/* Tipo de datos Boolean */
let estadoCivil = false;
estadoCivil = true;
if (estadoCivil) {
    console.log("Casado");
}
else {
    console.log("soltero");
}
estadoCivil = ObtenerEstado();
function ObtenerEstado() {
    return true;
}
/* Tipo de datos Number */
let numero = 12.9;
let edad = 18;
if (edad > 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}
edad = ObtenerEdad();
function ObtenerEdad() {
    return 30;
}
/* PLANTILLAS LITERALES */
let nombre = "Neisser";
let apellido = "Moreno";
let resultado = nombre + " " + apellido;
console.log(resultado);
let concatenar = `${nombre} ${apellido}`;
console.log(concatenar);
/* ARREGLOS */
let numero = [1, 2, 3, 65, ""];
numero.push("");
let nombres = ["Neisser", "Jair", "Karen"];
console.log(nombres[1]);
 * /;
/* TUPLES: Define ya los tipos de datos */
let datos;
datos = ["hola", 12];
console.log(datos[1]);
/* Enum: nos permite almacenar un conjunto de constantes con valores definidos */
var Estado;
(function (Estado) {
    Estado[Estado["activo"] = 0] = "activo";
    Estado[Estado["inactivo"] = 1] = "inactivo";
})(Estado || (Estado = {}));
console.log(Estado.activo);
/*  Tipo de aserciones: Conversion de tipo de variables o Casteo */
let valor = "Hola soy una cadena";
let resultado = valor.length;
let resultado2 = valor.length;
/* DIFERENCIA ENTRE VAR Y LET ES EL ALCANCE, let solo para el lboque de codigo y var de manera global */
/* CLASES Y CONSTRUCTORES : los atributos tbn podemos crearlos en el constructor */
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
let persona = new Persona("Neisser", "Moreno", 26);
console.log(persona);
/* HERENCIA */
class Persona {
}
class Estudiante extends Persona {
    constructor(numero) {
        super();
        this.numeroCarnet = numero;
    }
}
class Empleado extends Persona {
}
let estudiamte = new Estudiante(123456);
let empleado = new Empleado();
/* MODIFICADORES DE ACCESO */
class Estudiante {
    ObtenerNombre() {
        return this.nombre;
    }
}
let estudiante = new Estudiante();
class Empleado extends Estudiante {
    constructor() {
        super(...arguments);
        this.nombreCompleto = this.ObtenerNombre();
    }
}
/* MODIFICADOR READONLY: nos permitir marcar propiedades de solo lectura
osea que no se puede sobreescribir su valor */
class Libro {
}
let libro = new Libro();
libro.autor = "Neisser"; // aqui nos dice que solo es una propiedad de tipo lectura.
/* GET Y SET */
class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get Getnombre() {
        if (this._nombre) {
            return this._nombre;
        }
        else {
            return "Hola";
        }
    }
    set Setnombre(v) {
        this._nombre = v;
    }
}
let cliente = new Cliente();
console.log(cliente.nombre);
/* METODOS Y PROPIEDADES STATICAS
    Si tenemos el atributo estatico entonces en el medoto al llamar a pi
    nos dará error, podemos acceder si la función tbn se vuelvo statica ya que
    las propiedades staticas se comunican entre si. Su valor no cambia y no se puede instanciar.

*/
class Utilidad {
    static CalcularAreaDeCirculo(radio) {
        return radio * radio * this.pi;
    }
}
Utilidad.pi = 3.1416;
// let utilidad = new Utilidad();
// utilidad.  // Vemos que no podemos acceder al médoto y a la propiedad,
// //Entonces si hay propiedad y metodos staticos solo se puede acceder desde la misma clase.
let valor = Utilidad.CalcularAreaDeCirculo(23);
let figura = { ancho: 12 };
let punto = { x: 34, y: 56 };
punto.x = 23;
punto.y = 23;
class Utilidad {
    Sumar(a, b) {
        return a + b;
    }
    Restar(a, b) {
        return a - b;
    }
}
let figura2 = {};
figura2.alto = 15; // accedemos al alto y color
/* NAMESPACE */
Aqui;
haremos;
uso;
de;
los;
otros;
dos;
archivos;
creados(empleado, y, cliente);
let respuesta = Cliente.Mensaje(); // Lo almacenamos en un valor
console.log(respuesta);
let respuesta2 = Empleado.Mensaje();
console.log(respuesta2);
document.write(respuesta + " " + respuesta2);
pero;
con;
el;
archivo;
outFile;
solo;
debemos;
de;
importar;
una;
vez, eso;
lo;
encontramos;
en;
tsconfig.json.
    https;
/* DECORACIÓN DE CLASE */
Se;
declara;
antes;
de;
la;
declaracion;
de;
una;
clase;
y;
se;
aplica;
al;
constructor;
y;
se;
utiliza;
para;
para;
observar, modificar;
o;
reemplazar;
la;
deficion;
de;
una;
clase.
;
El;
decorador;
aqui;
lo;
crea;
como;
una;
función, aunque;
basicamente;
es;
eso.
;
function decoradorClase(target) {
    target.prototype.Saludar = function () {
        console.log("Hola Decorador");
    };
}
let Persona = class Persona {
    constructor() {
    }
};
Persona = __decorate([
    decoradorClase
], Persona);
let persona = new Persona();
persona.Saludar();
/* Como vemos la funcion lo hemso definido en la funcion que será el decorador
y no en la clase. Como los decoradores en TS es de tipo experimental no lo reconoce
pero en el navegador si */
/* DECORACIÓN DE MÉTODO */
/* Este se declara justo antes de la declaración de un método y se aplica y se aplica al descriptor de
propiedades para el método y se puede usar para observar, modificar o reemplazar la deficinión de un método. */
/* Ejemplo de  modificar el cuerpo de la función en base a un parametro. SI es verdadero
modificamos el cuerpo, si es falso no.*/
function decoradorClase(target) {
    target.prototype.Saludar = function () {
        console.log("Hola Decorador");
    };
}
function DecoradorMetodo(esModificable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esModificable;
    };
}
let Persona = class Persona {
    constructor() {
    }
    EnviarMensaje() {
        console.log("Enviando Mensaje");
    }
};
__decorate([
    DecoradorMetodo(false)
], Persona.prototype, "EnviarMensaje", null);
Persona = __decorate([
    decoradorClase
], Persona);
let persona = new Persona();
persona.EnviarMensaje = function () {
    console.log("modificada");
};
persona.EnviarMensaje();
