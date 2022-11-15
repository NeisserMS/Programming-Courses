const numbers = [2,4,6,8,10];
/*
La función nos devuelve un valor único!

acumulador: aqui toma esta variable y se itera por todos los elementos del arreglo y las operaciones se acumulan aqui
item: hace referencia al elemento actual q esta siendo recorrido
index: posicion actual del item
arreglo: es una referencia al arreglo que estamos iterando
para este ejemplo solo utilizamos dos
*/
// const res = numbers.reduce((acc, item) =>{
//     return acc = acc + item;
// }, 10); // que comience con 10, es el otro valor que pide reduce, puede ser 0. Si no se especifica agarra el primer numero del arrelgo.

// console.log(res);

// MISMO EJEMPLO PERO CON LETRAS

// const strings = ['Mi', 'nombre', 'es', 'Neisser'];

// const res = strings.reduce( (acc, item) => {
//     return acc + ' ' + item;
// }, 'Hola'); // Inicial

// console.log(res);

//------------------------------------------------------------------------

const objs = [
    {nombre: 'Neisser', edad: 26},
    {nombre: 'Monica', edad: 27},
];

const res = objs.reduce( (acc, item) => {
    return acc += item.edad;
}, 0); // si no se le pone el inicial solo muestra el 27, no suma el 26 con el 27.

console.log(res);

//-------------------------------------------------------

