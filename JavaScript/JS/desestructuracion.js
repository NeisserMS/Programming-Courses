// Asignación básica de variables
const x = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
const [y, z, i] = x;
console.log(i);

// Asignación separada de la declaración
let a, b;
[a, b] = [100, 200];
console.log(a);
console.log(b);

// Valores predeterminados
let c, d;
[c, d = 10] = [1]
console.log(c);
console.log(d);

// Analizar un arreglo devuelto por una función
function func() {
    return [1, 2];
}

let e, f;
[e, f] = func();
console.log(e);
console.log(f);

// Ignorar algunos valores devueltos
function functn() {
    return [7, 8, 9];
}

let [g, , h] = functn(); // ignora el 9
console.log(g);
console.log(h);

const [j] = functn();
console.log(j);

// Asignar el resto de un arreglo a una variable
const [k, ...l] = [8, 7, 7, 7, 7];
console.log(k);
console.log(l);
