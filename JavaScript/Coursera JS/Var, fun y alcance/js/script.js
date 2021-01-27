
var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);

    function b() {
        console.log("b: message = " + message);
    }

    b();

}

a();

/*
Primero vemos como almacenamos en una variable,
despues como lo hacemos en una función y al final a();
para llamar a la función y mostrarla, vemos como ponemos otra función dentro de otra
y esta captura el mismo mensaje.

*/