
// console.log("Hola desde el archivo app")

// let lista:string[] = ["Juan", "Pedro", "Luis"];

 // for (const iterator of lista){
 //     console.log(iterator)
 // }


 /* Tipo de datos Boolean 
 let estadoCivil:boolean = false;
 estadoCivil = true;

 if (estadoCivil) {
     console.log("Casado");
 } else {
     console.log("soltero");
 }

estadoCivil = ObtenerEstado();

 function ObtenerEstado(){
     return true;
 } */

/* Tipo de datos Number 
let numero:number = 12.9;

let edad:number = 18;
if(edad > 18){
    console.log("Es mayor de edad")
} else{
    console.log("Es menor de edad")
}

edad = ObtenerEdad();

function ObtenerEdad(){
    return 30;
} */ 

/* PLANTILLAS LITERALES 
let nombre:string = "Neisser";
let apellido: string = "Moreno";

let resultado = nombre + " " + apellido;
console.log(resultado);

let concatenar:string = `${nombre} ${apellido}`;
console.log(concatenar);
*/


/* ARREGLOS 
let numero = [1,2,3,65, ""];
numero.push("");

let nombres:string[] = ["Neisser", "Jair", "Karen"];
console.log(nombres[1]); */ 

/* TUPLES: Define ya los tipos de datos 
let datos:[string, number];
datos = ["hola", 12];
console.log(datos[1]); */

/* Enum: nos permite almacenar un conjunto de constantes con valores definidos 
enum Estado{
    activo,
    inactivo
}

console.log(Estado.activo) */ 

/*  Tipo de aserciones: Conversion de tipo de variables o Casteo
let valor: any = "Hola soy una cadena";

let resultado:number = (<string>valor).length;
let resultado2:number = (valor as string).length; */

/* DIFERENCIA ENTRE VAR Y LET ES EL ALCANCE, let solo para el lboque de codigo y var de manera global */

/* CLASES Y CONSTRUCTORES : los atributos tbn podemos crearlos en el constructor
class Persona{
    nombre:string;
    apellido:string;
    edad:number;
    fechaNacimiento:Date;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        
    }
}

let persona = new Persona("Neisser", "Moreno",26);
console.log(persona);

*/


/* HERENCIA

class Persona{
    nombre: string;
    edad: number;
}

class Estudiante extends Persona{
    numeroCarnet:number

    constructor(numero:number){
        super();
        this.numeroCarnet = numero;
    }
}

class Empleado extends Persona{
    numeroSeguro:number;
}

let estudiamte = new Estudiante(123456);
let empleado = new Empleado(); */

/* MODIFICADORES DE ACCESO 

class Estudiante{
    private nombre:string;
    apellido:string;
    edad:number;
    private numeroCarnet:number;
    estado: boolean;

    protected ObtenerNombre():string{
        return this.nombre;
    }
}

let estudiante = new Estudiante();

class Empleado extends Estudiante{
    nombreCompleto:string = this.ObtenerNombre();
} */


/* MODIFICADOR READONLY: nos permitir marcar propiedades de solo lectura
osea que no se puede sobreescribir su valor */

// class Libro{
//     readonly autor:string; 
//     titulo:string;
//     fecha:Date;
// }

// let libro = new Libro();
// libro.autor = "Neisser"; // aqui nos dice que solo es una propiedad de tipo lectura.

/* GET Y SET 

class Cliente {
    
    private _nombre : string;

    public get Getnombre() : string {
        if(this._nombre){
            return this._nombre;
        } else {
            return "Hola";
        }

    }
    public set Setnombre(v : string) {
        this._nombre = v;
    }

    constructor(nombre?:string){
        this._nombre = nombre;
    }
}

let cliente = new Cliente();
console.log(cliente.nombre);
*/ 

/* METODOS Y PROPIEDADES STATICAS 
    Si tenemos el atributo estatico entonces en el medoto al llamar a pi
    nos dará error, podemos acceder si la función tbn se vuelvo statica ya que 
    las propiedades staticas se comunican entre si. Su valor no cambia y no se puede instanciar.

*/ 

// class Utilidad{
//     static pi:number = 3.1416;

//      static CalcularAreaDeCirculo(radio:number){
//         return radio * radio * this.pi;
//     }
// }

// // let utilidad = new Utilidad();
// // utilidad.  // Vemos que no podemos acceder al médoto y a la propiedad,
// // //Entonces si hay propiedad y metodos staticos solo se puede acceder desde la misma clase.

// let valor:number = Utilidad.CalcularAreaDeCirculo(23);

/* Interfaces: tbn puede tener valores de solo lectura y todo lo que se declara en la interfaz
se debe de implementar, es como firmar un contrato*/

// interface IFigura{
//     alto?:number,
//     ancho:number
// }

// let figura:IFigura = { ancho:12}

// interface IPunto{
//     readonly x: number;
//     readonly y: number;
// }

// let punto:IPunto = { x:34, y:56};
// punto.x = 23;
// punto.y = 23;

/* EXTENDIENDO LAS INTERFACES 
Sabemos que estas son 100% anbstractas, por ende se debe de implementar todo lo declarado*/ 

// interface IMatematica{
//     total?:number;
//     Sumar(a:number, b:number):number;
//     Restar(a:number, b:number):number
// }

// class Utilidad implements IMatematica{
//     Sumar(a: number, b: number): number {
//         return a + b;
//     }
//     Restar(a: number, b: number): number {
//         return a - b;
//     }
// }  

// //Entiendolo para copiar sus miembros para brindar una mayor flexibilidad
// // a la hora de separar nuestras interfaces en componentes reutilizables.

// interface IFigura1{
//     color:string;
// }
// interface IFigura2 extends IFigura1{
//     alto:number;
// }

// let figura2 = {} as IFigura2;
// figura2.alto = 15; // accedemos al alto y color


/* NAMESPACE */ 
//Aqui haremos uso de los otros dos archivos creados (empleado y cliente)

// let respuesta = Cliente.Mensaje(); // Lo almacenamos en un valor
// console.log(respuesta);

// let respuesta2 = Empleado.Mensaje();
// console.log(respuesta2);

// document.write(respuesta + " " + respuesta2);
// pero con el archivo outFile solo debemos de importar una vez, eso lo encontramos en tsconfig.json.
// https://www.youtube.com/watch?v=Y93nvKyp1gU&list=PL9prAn3zOWZ57IqzWvUu3xKuIG_NYTJ6H&index=38


/* DECOCADORES */ 

// Se declara antes de la declaracion de una clase y se aplica al constructor y se utiliza para
// para observar, modificar o reemplazar la deficion de una clase.
// El decorador aqui lo crea como una función, aunque basicamente es eso.

// function decoradorClase(target:Function){
//     target.prototype.Saludar = function(){
//         console.log("Hola Decorador")
//     }
// }

// @decoradorClase
// class Persona {
//     constructor(){

//     }
// }

// let persona = new Persona();
// persona.Saludar();

/* Como vemos la funcion lo hemso definido en la funcion que será el decorador
y no en la clase. Como los decoradores en TS es de tipo experimental no lo reconoce
pero en el navegador si */ 
































































