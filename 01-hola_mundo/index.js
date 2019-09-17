const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'manzana', cantidad: 10},
            {nombre: 'banana', cantidad: 0},
            {nombre: 'mandarina', cantidad: 12}
        ]
    }
})