"use strict";
// console.log('Hello Word');
// // Tipos de datos
// var myString: string = "Hello World!"
// var myNumber: number = 22;
// var myBool: boolean = false;
// var myVar: any = "hello"; //Cuando queremos que sea de cualquier tipo
// myVar = false;
// // Salida
// document.write(myString);
// document.write(myNumber.toString()); // LO convertimos a cadena ya que document.writhe escribe tipos Strings
// // Arrays
// var StringArray: any[] = ["", "", ""]; //Que sea de cuaquier tipo de variables, se puede combinar.
// StringArray = [1,2,3];
// var StringCadena: string[] = ["item1", "item2", "item3"]
// var StringNumero: number[] = [1,2,3,4];
// // Tuple : tienen una estructura definida
// var strNumTaple: [ string, number]; // Hemos definido el tipo de dato
// strNumTaple = ["Hello", 22]; // Le damos los valores
// // strNumTaple = ["world", 245, "", 45];  //Ya no se puede xd
// // Vacios, indefinidos y nuloes (void, undefined, null)
// // se usa let para no perder el alcance de las variables, pero es lo mismo que var.
// const PI = 3.1416 // Es una constante
// let myVoid: void = null;
// let myNull: null = undefined;
// //typeof: nos dice de que tipo es el tipo de dato de la variable
// document.write(typeof(myVoid));
// // funciones
// function getSum(num1: number, num2: number) :number{ // Con el ultimo number le decimos que exactamente tiene que retonar un number
//     return num1 + num2;
// }
// // let mySum = function( // Declaración a través de una variable
// //     mun1: number | string,
// //     num2: number | string):number {
// //         if(typeof(num1) ==='string'){
// //             num1 = parseInt(num1);
// //         }
// //         if(typeof(num2) ==='string'){
// //             num2 = parseInt(num2);
// //         }
// //         return num1 + num2;
// //     }
//     // Interfaces
//     interface ITodo{
//         title: string;
//         text: string;
//     }
//     function showTodo(todo: ITodo){
//         console.log(`${todo.title} - ${todo.text}`)
//     }
//     showTodo({
//         title: 'Yahiko',
//         text: 'Lorem'
//     })
//     // Clases
//     class user{
//         name: string;
//         email: string;
//         age: number;
//         constructor(name){
//             this.name = name;
//         }
//         register(){
//             console.log(`${this.name} is registered`);
//         }
//     }
//     var Neisser = new user('Arilson');
//     document.write(Neisser.name)
