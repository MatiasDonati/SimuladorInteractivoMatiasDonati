// Clase constructora para crear prdoducto
class Producto {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.vendido = false;
        this.cantidad = 10;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
};

const productosListados = [];

function crearProducto (){
    const cantidadDeProductos = Number(prompt('Cuantos productos va a ingresar  ?\nIngreselo en numeros.','ej.: "4"'));
    for ( let i = 0; i < cantidadDeProductos; i++ ){
        let producto =  new Producto (i+1, prompt(`Ingrese nombre del producto número: ${ i + 1 }`).toUpperCase(), prompt(`Ingrese Precio del producto número: ${ i + 1 }`));
        productosListados.push(producto)
    }
};
crearProducto();


for (const producto of productosListados) {
    producto.sumarIva();
};

const ordenarProductos = () =>{
    let ordenProductos = confirm('Desea ordenar de menor a mayor precio?')
    if (ordenProductos === true){
        productosListados.sort((a,b) => a.precio - b.precio);
    console.log(productosListados);
    }
};
ordenarProductos();
console.log(productosListados);

const arrayNombreProductos = [];
const mostrarProductos = () => {
    for (let i = 0 ; i < productosListados.length ; i++){
        arrayNombreProductos.push(productosListados[i].nombre)
    }
    alert(arrayNombreProductos.join('\n'))
};
mostrarProductos();

let productoSeleccionado;
let listaDeCompras = [];
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

        let confirmarCompra = confirm(`Confirma la compra de ${productoSeleccionado.nombre}`)
        if (confirmarCompra === true){
            productoSeleccionado.cantidad = productoSeleccionado.cantidad - 1
            productoSeleccionado.vendido = true;
        }else {
            while(confirmarCompra !== true){
                alert('Debera seleccionar un producto')
                producto = prompt(`Ingrese el prodcuto que desea comprar\nLos productos en Stock son:\n${arrayNombreProductos.join('\n')}`, `${productosListados[0].nombre}`).toUpperCase();
                id = arrayNombreProductos.indexOf(producto)
                confirmarCompra = confirm(`Confirma la compra de ${productoSeleccionado.nombre}`)
            }
        }
    listaDeCompras.push(productoSeleccionado)
    console.log(listaDeCompras);
};
seleccionarProducto();

const comprarOtroProducto = () => {
    let otroProducto;
    let agregarOtroProducto = confirm('Desaea agregar otro producto?')
    if(agregarOtroProducto){
        let productoAgregado = prompt(`Ingrese el producuto que desea agregar a su compra.\n${arrayNombreProductos.join('\n')}`).toUpperCase();
        let id = arrayNombreProductos.indexOf(productoAgregado);
        while(id == -1){
            productoAgregado = prompt(`Ingrese el prodcuto que desea agregar !!\nLos productos en Stock son:\n${arrayNombreProductos.join('\n')}`, `${productosListados[0].nombre}`).toUpperCase();
            id = arrayNombreProductos.indexOf(productoAgregado)
        }
        otroProducto = productosListados.find(elemento => elemento.nombre === productoAgregado);
        let confirmarCompra = confirm(`Confirma la compra de ${otroProducto.nombre}`)
        if (confirmarCompra === true){
            otroProducto.cantidad = otroProducto.cantidad - 1;
            otroProducto.vendido = true;
        }
        console.log(otroProducto);
        listaDeCompras.push(otroProducto)
        for (nombre of listaDeCompras){
            console.log(nombre.precio);
        }
    }
};
comprarOtroProducto()

function formaDePago (){
    let tarjeta = confirm('Desea abonar con Tarjeta de Credito');
    if(tarjeta){
        let numeroTarjeta = prompt(`Ingrese los 16 numeros de su Tarjeta`);
        // cuando en la ventana emergente de prompt se pone cancelar re rompe todo
        // No toma numeroTarjeta == '' el cancelar del prompt tiene un corpontamiento extraño...
        let codigoSeguridad = prompt(`Ingrese los 3 numeros del código de seguridad`)
        while(numeroTarjeta.length !== 16 || numeroTarjeta == ''){
            console.log(numeroTarjeta);
            numeroTarjeta = prompt(`Ingrese nuevamente los 16 numeros de su Tarjeta`);
        }
        while(codigoSeguridad.length !== 3){
            codigoSeguridad = prompt(`Ingrese nuevamente los 3 numeros del código de seguridad`)
        }
        // Hacer una reduce para sumar los precios de listaDeCompras y ahi hacerle el cargo de tarjeta
        let total = listaDeCompras.reduce((acc, prodcuto) => acc + prodcuto.precio, 0) * 1.1;
        poseeCupon(total)
    }else{
        total = listaDeCompras.reduce((acc, prodcuto) => acc + prodcuto.precio, 0);
        poseeCupon(total)
    }
};
formaDePago();

function poseeCupon(total){
    let cupon = confirm('Posee Ud. un cupon de descuento?');
    console.log(total);
    while(cupon) {
        let numeroCupon = prompt('Ingrese el numero de su cupon de 6 numeros', 'ej.: "453613"');
        console.log(numeroCupon.length)
        if (numeroCupon.length === 6){
        console.log(productoSeleccionado.precio)
        total = total - (total * 0.2);
        console.log(productoSeleccionado.precio)
        break;
        } else{
            alert('No poseemos ese cupon de descuento en nuesta base de datos')
            cupon = confirm('Esta seguro que posee un cupón de descuento?');
        }
    }
    mensajeFinal(total)
};

function mensajeFinal (total){
    console.log(listaDeCompras.length)
    console.log(total);
    if(listaDeCompras.length === 1){
        alert(`Felicitaciones!\nUd. compro un ${productoSeleccionado.nombre}\nAbonará un total de $${productoSeleccionado.precio.toFixed(2)}`);
        console.log(productoSeleccionado.precio.toFixed(2));
    }else{
        let arrayProdcutosFinales = [];
        for (producto of listaDeCompras){
            arrayProdcutosFinales.push(producto.nombre)
        }
        console.log(arrayProdcutosFinales);
        alert(`Ud abonara un total de $ ${total} por la compra de\n${arrayProdcutosFinales.join('\n')}`)
    }

};

function publicidadDespedida (){
    let array = [];
    productosListados.forEach(producto => array.push(`${producto.nombre} // $ ${producto.precio} // Stock: ${producto.cantidad}`));
    alert(`Esperamos volver a verle !\nTodavía nos quedan\n${array.join('\n')}`)
}
publicidadDespedida()