
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


/* 


*/