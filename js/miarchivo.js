// Clase constructora para crear prdoducto
class Producto {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.vendido = false;
        this.cantidad = 12;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

// Cuantos productos ingresan al Stock ??
const cantidadDeProductos = Number(prompt('Cuantos productos va a ingresar  ?\nIngreselo en numeros.','ej.: "4"'));

// Declaramos el array para pushear los objetos(en este caso productos)
const productosListados = [];

// Cremaos el producto mediante una funcion y lo pusheamos al array, la cantidad de productos dependera de la cantidad que se eligio previamente ingresar.
function crearProdcuto (){
    for ( let i = 0; i < cantidadDeProductos; i++ ){
        let producto =  new Producto (i+1, prompt('Ingrese Nombre del producto'), prompt('Ingrese Precio del producto'));
        productosListados.push(producto)
    }
}
crearProdcuto();
console.log(productosListados);
// Ahora el Array contiene cada producto creado por el Admin

// Iteramos el array con for...of para modificarl el precio ejecutando la funcion sumarIva sobre cada prdoducto, sobre cada indice del array, que cada indice es un obejto.
for (const producto of productosListados) {
    producto.sumarIva();
}

// Mostramos los productos por alert, queria mostrarlos todos juntos pero no se puede mostrar un array de objetos por alert
// Entonces hago un Array de strings solo con los nombres de cada prodcuto
const arrayNombreProductos = [];
function mostrarProductos(){
    for (let i = 0 ; i < productosListados.length ; i++){
        arrayNombreProductos.push(productosListados[i].nombre)
    }
    alert(arrayNombreProductos.join('\n'))
}
mostrarProductos();

// Seleccionar prodcuto para realizar la compra y ver si existe en la base de datos
let productoSeleccionado;
function seleccionarProducto (){
    let producto = prompt(`Ingrese el prodcuto que desea comprar\nLos productos en Stock son:\n${arrayNombreProductos.join('\n')}`, `${productosListados[0].nombre}`).toUpperCase();
    let id = arrayNombreProductos.indexOf(producto);
    console.log(productosListados[id])
    while(id == -1){
        producto = prompt(`Ingrese el prodcuto que desea comprar\nLos productos en Stock son:\n${arrayNombreProductos.join('\n')}`, `${productosListados[0].nombre}`).toUpperCase();
        id = arrayNombreProductos.indexOf(producto)
    }
        productoSeleccionado = productosListados[id];
        alert(`Ud. ha seleccionado ${productoSeleccionado.nombre}\nTiene un precio de $${productoSeleccionado.precio}, incluido en IVA.`)

        // MARCA COMO VENDIDO SI CONFIRMA LA COMPRA
        // SI NO CONFIRMA LA COMPRA VUELVE A SOLICITAR QUE SELECCIONE UN PRDOCUTO Y LO CONFIRME

        let confirmarCompra = confirm(`Confirma la compra de ${productoSeleccionado.nombre}`)
        if (confirmarCompra === true){
            productoSeleccionado.vendido = true;
        }else {
            while(confirmarCompra !== true){
                alert('Debera seleccionar un producto')
                producto = prompt(`Ingrese el prodcuto que desea comprar\nLos productos en Stock son:\n${arrayNombreProductos.join('\n')}`, `${productosListados[0].nombre}`).toUpperCase();
                id = arrayNombreProductos.indexOf(producto)
                confirmarCompra = confirm(`Confirma la compra de ${productoSeleccionado.nombre}`)
            }
        }
}
seleccionarProducto();

// QUE INGRESE LOS 16 NUMEROS DE LA TARJETA SI NO SON 16 ERROR !! Y INGRESAR DE NUEVO // LUEGO INGRESAR LOS 3 DIGITOS VERIFICADORES ...
// QUE INGRESE LOS 16 NUMEROS DE LA TARJETA SI NO SON 16 ERROR !! Y INGRESAR DE NUEVO // LUEGO INGRESAR LOS 3 DIGITOS VERIFICADORES ...
// QUE INGRESE LOS 16 NUMEROS DE LA TARJETA SI NO SON 16 ERROR !! Y INGRESAR DE NUEVO // LUEGO INGRESAR LOS 3 DIGITOS VERIFICADORES ...

function formaDePago (){
    // alert('Puede abonar en Efectivo o Tarjeta de Credito');
    let tarjeta = confirm('Desea abonar con Tarjeta de Credito');
    if (tarjeta === true){
        productoSeleccionado.precio = productoSeleccionado.precio * 1.1;
    }
}
formaDePago();
console.log(productoSeleccionado.precio)

// Si posee el cupon de descuento de 6 digitos se hace un descuento de un 20%
function poseeCupon(){
    let poseeCupon = confirm('Posee Ud. un cupon de descuento?');
    while(poseeCupon) {
        let numeroCupon = prompt('Ingrese el numero de su cupon de 6 numeros', 'ej.: "453613"');
        console.log(numeroCupon.length)
        if (numeroCupon.length === 6){
        console.log(productoSeleccionado.precio)
        productoSeleccionado.precio = productoSeleccionado.precio - (productoSeleccionado.precio * 0.2);
        console.log(productoSeleccionado.precio)
        break;
        } else{
            alert('No poseemos ese cupon de descuento en nuesta base de datos')
            poseeCupon = confirm('Esta seguro que posee un cupón de descuento?');
        }
    }
}
poseeCupon()

alert(`Felicitaciones!\nUd. compro un ${productoSeleccionado.nombre}\nAbonará un total de $${productoSeleccionado.precio.toFixed(2)}`);
console.log(productoSeleccionado.precio.toFixed(2));

// ME FALTA SACARLE LOS DECIMALES AL PRECIO!
// ME FALTA SACARLE LOS DECIMALES AL PRECIO!
// ME FALTA SACARLE LOS DECIMALES AL PRECIO!
// ME FALTA SACARLE LOS DECIMALES AL PRECIO!


// USAR MAS FOR..OF !!!!