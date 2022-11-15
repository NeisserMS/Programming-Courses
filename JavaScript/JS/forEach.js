// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(escribirNumero);

// function escribirNumero(item, index, arr){
//     console.log(index + ' ' + item);
// }

// Podemos hacerlo con una función flecha:
// numeros.forEach((item, index, arr) => console.log(index + ' ' + item));

// Prueba con una suma
// let suma = 0;
// numeros.forEach(item => {
//     suma += item;
// });
// console.log(suma);

/////////////////////////////////////$RECYCLE.BIN

const letras = ['a', 'b', 'a', 'd', 'e'];

let contador = {};

letras.forEach(item =>{
    if(contador[item]){
        contador[item]++;
    } else{
        contador[item] = 1;
    }
});

console.log(contador);
