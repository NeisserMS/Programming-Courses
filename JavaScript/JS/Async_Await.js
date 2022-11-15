const datos = [
    { id: 1, title: 'Iro Man', year: 2008 },
    { id: 2, title: 'Thor', year: 2008 },
    { id: 3, title: 'Hulk', year: 2008 },
];

// const getDatos = () => {
//     return datos;
// }

// console.log(getDatos());

// -----------------------------------
// Como no hay nada que espere a que se resuelve va a botar un undefined!
// const getDatos = () => {
//     setTimeout( () => {
//         return datos;
//     }, 1500);
// }

// console.log(getDatos());

// ----------- Utilizando promesas: permite ejecutar un pedazo de codigo y cuando este listo lo devuelve, bien el resultado o error.
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(datos);
        }, 1500);
    });
}
    
// getDatos().then((datos) => console.log(datos));

// --- Async/Await: es una manera de hacer lo mismo, es una forma mas sincrona, secuencial, pero por debajo sigue siendo asincrono.

async function fetchingData (){
    try{
        const datosFetch = await getDatos();
        console.log(datosFetch);
    } catch (err){
        console.log(err);
    }
}

fetchingData();