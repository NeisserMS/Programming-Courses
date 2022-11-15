// Find devuelve el primer elemento de una condicion dada o aplicada.

const cities = ['madrid', 'valencia', 'lugo'];

const found = cities.find( city => { // si lo encuentra el primer elemento que cumpla la condicion ya no sigue buscando, lo para.
    console.log(city);
    return city === 'lugo';
});

console.log(found);