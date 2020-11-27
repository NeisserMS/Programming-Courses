
const app = new Vue({

    el: '#app',

    data: {
        titulo: 'Hola mundo con Vue',

        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Platano', cantidad: 0},
            {nombre: 'Manzana', cantidad: 8}

        ],

        nuevaFruta:''
        
    },

    methods: {
        
        agregarFruta(){

            this.frutas.push({

                nombre: this.nuevaFruta, cantidad: 0

            })
            
        }
    }
})

/* 

methods es una palabra reservada,

dos formas de agregar metodos:

1.- 
 agregarFruta: function(){

            console.log('diste click');
            
        }

2.- 
        agregarFruta(){

            console.log('diste click');
            
        }
    }


Los eventos: 

en el button agregar podriamos utilizar el onlick, pero Vue 
nos da tecnicas para trabajar directamente con sus eventos de ellos.




*/