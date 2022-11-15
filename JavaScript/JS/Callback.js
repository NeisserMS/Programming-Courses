// Es una función que se pasa a otra como atgumento y que se ejcuta dps de una operación, no tiene que ser asincrono.
// el collback podemos llamarlo dps de otra funcion

function modify(array, collback){
    // hacemos algo
    array.push('neisser');
    //despues de hacer algo..
    setTimeout(function(){ //ejemplo haciendolo asincrono
        collback(array);
    }, 3000)
  
}

const names = ['jair', 'karen', 'chuno'];

modify(names, function(array){
    console.log(`Bienvenido ${array.length}`);
});