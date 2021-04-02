const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Pizza Mostra'
    } 
})
const pizza = new Vue({
    el: '#pizza',
    data: {
        pizza: [
            { nombre: 'Pizza Hawaiana', precio: 29.50, antes: 34.90 },
            { nombre: 'Pizza Italiana', precio: 34.50, antes: 39.90 },
            { nombre: 'Pizza con Piña', precio: 19.50, antes: 24.90 },
            { nombre: 'Pizza con Jamon', precio: 27.00, antes: 34.90 },
            { nombre: 'Pizza con Aceituna', precio: 18.50, antes: 34.90 },
        ],
        productos: [],
        titulo: 'Pizza Mostra',
        daniel: 'destruccion',
        delivery: 7.50,
        total: 0
       
    },
    methods:{
        agregarCarrito: function(index){
            this.productos.push({
                comida: this.pizza[index],
            })
            return console.log(this.productos);
        }

    },
    computed: {
        sumarPrecio (){
            this.total = 0;
            for(producto of this.productos){
                this.total = this.total + producto.comida.precio;
            }
            this.total = this.total + this.delivery;
            return this.total;
        }
    }


});



/* const pizzas = new Vue({
    el: '#pizzas',
    data: {
        pizza: [
            { nombre: 'Pizza Hawaiana', precio: 29.90, antes: 34.90 },
            { nombre: 'Pizza Italiana', precio: 34.90, antes: 39.90 },
            { nombre: 'Pizza con Piña', precio: 19.90, antes: 24.90 },
            { nombre: 'Pizza con Jamon', precio: 29.90, antes: 34.90 },
            { nombre: 'Pizza con Aceituna', precio: 29.90, antes: 34.90 },
        ],
        productos:[], 
        nombres: 'jajajja'

    },
   methods:{
        agregarCarrito: function(index){
            this.productos.push({
                comida: this.pizzas[index],
            })
            return console.log(this.productos);
        }

    }

}) */
