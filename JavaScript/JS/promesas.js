 // miFuncion();
//  function miFuncion(){
//     console.log("Saludos desde mi función");
// }
// miFuncion(); 

// let miFuncion2 = function(){
//     console.log('Saludos desde mi función 2');
// }
// miFuncion2()


// let miFuncion3 = () => {
//             console.log("Saludos desde mi función 3");
//         }

// const miFuncion3 = () => console.log("Saludos desde mi función 4")

// miFuncion3();

// const saludar = () => {
//     return 'Saludos desde Flecha';
// }

// console.log(saludar());

// const funcionParametros = mensaje => console.log(mensaje);
// funcionParametros('Saludos desde Parametros');

const newFunction = (op1, op2, op3) => {
    let resul = op1 + op2 +op3;
    return `Resultado: ${resul}`;
};

console.log(newFunction(1,2,3));