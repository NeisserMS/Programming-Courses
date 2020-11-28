
const app = new Vue({

    el: '#app',

    data: {
        titulo: 'Hola mundo con Vue',

        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Platano', cantidad: 0},
            {nombre: 'Manzana', cantidad: 8}
        ],
        nuevaFruta: '',
        total: 0   
    },

    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });

            this.nuevaFruta = '';
        }
    },

    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    },
})


/* 

Hasta aquí si damos click en agregar se agrega el contenido ingresado y se limpia pantalla,
pero cuando presionamos enter no sucede nada, entonces vamos a la documentacion de vue y 
buscamos keyup (https://vuejs.org/v2/guide/events.html#Key-Modifiers)

const app = new Vue({

    el: '#app',

    data: {
        titulo: 'Hola mundo con Vue',

        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Platano', cantidad: 0},
            {nombre: 'Manzana', cantidad: 8}
        ],
        nuevaFruta: ''   
    },

    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });

            this.nuevaFruta = '';
        }
    }
})

-----------------------
El v-model en el html puede ser transformado 

v-model.number


COMPUTED:
Es otra propiedad!
SON ARREGLOS Y DENTRO PODEMOS CREAR LAS FUNCIONES Q NECESITEMOS



*/