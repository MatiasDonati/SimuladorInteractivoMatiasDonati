// VENTA DE PRODCUCTO, SI PAGA CON TARJETA TIENE UN RECARGO, EL CLIENTE PUEDE TENER UN CUPON DE DESCUENTO, EL CLIENTE PUEDE COMPRAR MAS DE UN PRODCUTO A LA VEZ, EN ESTE CASO DEL MISMO

let precioProducto = 1000;
let cantidad
let poseeCupon = false;
let productoSeleccionado;
let precioFinal;
let abonaConTarjeta = false
let numeroCupon;
let descuentoCupon = 0;

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const tarjeta = x => x * 0.1;

let idProducto = Number(prompt('En este momento contamos con los siguiente productos: Licuadora, Sombrilla y Teclado. \nIngrese: \n1 Licuadora \n2 Sombrilla \n3 Teclado', 'ej.: 3'));
// si no ingresa nada devuelve 0

while(idProducto <1 || idProducto>3 || isNaN(idProducto)){
    idProducto =  Number(prompt('Ingreso mal el numero del prodcuto, ingreselo nuevamente', 'ej.: "2"'));
}
if (idProducto === 1){
    productoSeleccionado = 'Licuadora'
    precioProducto = 1500;
    alert('Ud. ha seleccionado "Licuadora"')
} else if(idProducto === 2) {
    productoSeleccionado = 'Sombrilla'
    precioProducto = 1250;
    alert('Ud. ha seleccionado "Sombrilla"')
} else if(idProducto === 3) {
    productoSeleccionado = 'Teclado'
    precioProducto = 2500;
    alert('Ud. ha seleccionado "Teclado"')
}

cantidad = Number(prompt(`Ingrese la cantidad de ${productoSeleccionado}s que desea comprar`))
while(isNaN(cantidad) || !cantidad || cantidad <1){
    cantidad = Number(prompt(`Ingrese en NUMEROS! la cantidad de ${productoSeleccionado}s que desea comprar`))
}

if (cantidad > 1){
    precioProducto = precioProducto * cantidad;
    if(idProducto === 1){
        productoSeleccionado = 'Licuadoras'
    } else if (idProducto === 2){
        productoSeleccionado = 'Sombrillas'
    }else if (idProducto === 3){
        productoSeleccionado = 'Teclados'
    }
}

abonaConTarjeta = confirm('Desea abonar con tarjeta?')

    if(abonaConTarjeta) {
        precioFinal = sumar(precioProducto, tarjeta(precioProducto));
            alert(`Ud. abonará un total de $${precioProducto} por la compra de ${cantidad} ${productoSeleccionado} y un recargo de $${tarjeta(precioProducto)} por abonar con tarjeta, siendo un total de $${precioFinal}`);
    } else {
        precioFinal = precioProducto
        alert(`Ud. abonará un total de $ ${precioFinal} por la compra de de ${cantidad} ${productoSeleccionado}`)
    }

poseeCupon = confirm('Posee Ud. un cupon de descuento?');

while(poseeCupon) {
   numeroCupon = prompt('Ingrese el numero de su cupon de 6 numeros', 'ej.: "453613"');
   if (numeroCupon.length === 6){
    descuentoCupon = 200
    break;
   } else{
    descuentoCupon = 0;
    alert('No poseemos ese cupon de descuento en nuesta base de datos')
    poseeCupon = confirm('Esta seguro que posee un cupón  de descuento?');
  }
}

switch(poseeCupon){
  case true:
    alert(`Se le aplica un descuento de $ ${descuentoCupon} y abonará un total de $ ${restar(precioFinal, descuentoCupon)}`);
    precioFinal = restar(precioFinal, descuentoCupon)
    break;
  case false:
    alert(`Ud. abonara un total de $ ${precioFinal}`);
}

alert(`Gracias por confiar en Nosotros ! Le dejamos el resumen de su compra. \nProducto: ${productoSeleccionado}\nPrecio: $${precioProducto}\nCantidad: ${cantidad}\nCargo por tarjeta: $${tarjeta(precioProducto)}\nCupon de descuento: $${descuentoCupon}\nPrecio Final: $${precioFinal}`);