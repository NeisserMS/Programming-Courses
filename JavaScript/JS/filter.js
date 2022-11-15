// Programacion funcional porque no hacemos cambios al arreglo original, no lo mutamos, creamos otro.
// Método tradicional

var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'arepa', postre: 'galleta'},
    {principal: 'ceviche', postre: 'gelatina'},
    {principal: 'tallarines', postre: 'mazamorra'},
    {principal: 'aji de gallina', postre: 'churros'},
    {principal: 'chaufa', postre: 'flan'},
];

// var PostresArepas = [];

// for(var i=0; i<almuerzos.length; i++){
//     if(almuerzos[i].principal === 'arepa'){
//         PostresArepas.push(almuerzos[i].postre);
//     }
    
// }
// console.log(PostresArepas);

// ------------------------------------------

// Utilizando la programación funcional - Reporte del menu principal con el postre.
// var PostresArepas = almuerzos.filter(function(almuerzo){
//     return almuerzo.principal === 'arepa'; // usamos un boleano, sombrear function.
// });



// ------------------------------------------

// Ahora le sumamos el map porque solo queremos los postres.
var PostresArepas = almuerzos.filter(function(almuerzo){
    return almuerzo.principal === 'arepa'; 
}).map(function(almuerzo){
    return almuerzo.postre;
});
console.log(PostresArepas);
