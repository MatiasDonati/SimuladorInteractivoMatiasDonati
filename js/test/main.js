
// // Declaracion de array vacio y variable para determinar la cantidad de elementos

// const listaNombres = [];
// let cantidad = 5;

// Empleo de do...while para cargar nombres en el Array por promt()

do {
    let entrada = prompt('Ingresar nombre');
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}

while(listaNombres.length != cantidad)

// concatenamos el array creado con Ana y Ema, dos elemntos

const nuevaLista =  listaNombres.concat(['Ana', 'Ema']);

// Los mostramos en un alert con salto de linea usando join

alert(nuevaLista.join('\n'));


// ////////////////////////// ELIMINAR ELEMNETO
// ////////////////////////// ELIMINAR ELEMNETO
// ////////////////////////// ELIMINAR ELEMNETO

// const nombres = ['Ana', 'Juan', 'Pepe', 'Tito', 'Raquel'];

// //  buscar el indice del nombre en el array

// const eliminar = (nombre) => {
//     let i = nombres.indexOf(nombre)

//     // si existe , o sea si es distinto a -1 (que seria q no existe ese elemento), o borro con splice

//     if (i != -1){
//         nombres.splice(i, 1);
//     }
// }

// console.log(nombres);
// console.log(nombres.length);
// eliminar('Ana')
// console.log(nombres);
// console.log(nombres.length);

// // ARRAYS DE OBJETOS
// // ARRAYS DE OBJETOS
// // ARRAYS DE OBJETOS
// // ARRAYS DE OBJETOS
// // ARRAYS DE OBJETOS

// const objeto1 = { id: 1, producto: 'Arroz' };
// const array = [ objeto1, { id: 2, producto: 'Fideo' } ];

// array.push( { id: 3, producto: 'Pan' } )

// console.log(array);


// //  FOR ... OF
// //  FOR ... OF
// //  FOR ... OF
// //  FOR ... OF
// //  FOR ... OF
// //  FOR ... OF

// const array1 = [ 
//     { id: 1, producto: 'Arroz' },
//     { id: 2, producto: 'Fideo' },
//     { id: 3, producto: 'Leche' },

// ]

// for (const producto of array1) {
//     console.log(producto.id)
//     console.log(producto.producto)
// }


// EJEMPLO APLICADO: OBJETOS, PRODCUTO Y ARRAYS

// NO PUEDO SACARLE LOS DECIMALES AL PRECIO CUANDO LE SUMA EL IVA ..
// LOS PASE A NUMBERS Y TAMPOCO ME LO TOMA

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio).toFixed();
        this.vendido = true;
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
};

// Declaramos un Array de productos para almacenar objetos

const productos = [];
productos.push( new Producto ( 'Manteca', '120' ) );
productos.push( new Producto ( 'Fideos', '180' ) );
productos.push( new Producto ( 'Queso', '80' ) );

console.log(productos)

// Iteramos en array con for... of para modificarlos a todos

for (const producto of productos) {
    producto.sumarIva();
}

console.log(productos)

let numero = 2.34;
console.log(numero.toFixed())

