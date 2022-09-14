//  CONSTRUCTOR DE UN OBJETO:
//  en JS, es una funcion donde se inicializa el mismo y todas sus propiedades.

// METODO DE UN OBJETO
// Es tecnicamente una funcion, solo que se limita a poder ser ejecutada unicamente desde el mismo objeto.

// INVOCAR
// En programacion, una invocacion o llamada a una funcion, implica pasarle el control de la ejecucion del programa, asi como los argumentos que requiere para realizar su tarea.

// OBJETIIVO COMPRENDER LAS UTILIDADES DE LA COMBINACION DE ARRAYS Y OBJETOS.

let nombres = ['Juan', 'Rober', 'Ana', 'Mike', 'Richard'];
let perros = ['Pucho', 'Chueco', 'Negro', 'Pelusa'];

// Largo del array
console.log(nombres.length);

// Imprine el indice que se ingrese en los corchetes
console.log(nombres[0]);
console.log(nombres[3]);
console.log(nombres[3] +' '+nombres[4]);


// Imprime cada elemneto del array
for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    console.log(nombre + ' Usando Ciclo for');
}

// Agregar elemento AL FINAL  con .push('elemento a agregar')

nombres.push('Joaquina');
console.log(nombres)
console.log(nombres.length)

//AGREGAR AL PRINCIPIO DEL ARRAY unshift()

nombres.unshift('Miguelito')
console.log(nombres)
console.log(nombres.length)

// Eliminar el PRIMER elemento shift()

nombres.shift();
console.log(nombres)
console.log(nombres.length)

// Eliminar el ULTIMO elemento pop()

nombres.pop()
console.log(nombres)
console.log(nombres.length)

// Elimiar elemto en un INDICE DETERMINADO y podes elegir si es uno o varios desde ese INDICE PARA DELANTE
// lleva dos parametros, el INDICE y la cantidad desde esa posicion
// ['Juan', 'Rober', 'Ana', 'Mike', 'Richard']
nombres.splice(1, 2)
console.log(nombres)
// En este ejemplo se borra Rober y Ana

// GENERAR UN STRING DE TODO EL ARRAY CON join(), lo que va dentro de los () de join es es string entre cada elemento del array
console.log(nombres.join('*'))
// Juan*Mike*Richard

// UNIR DOS ARRAYS CON concat()

console.log(nombres.concat(perros));

// El metodo SLICE (no SPLICE) devuelve una parte del array seleccionada a un nuevo array y no modifica el oroginal
// los parametros son del principio al final (no incluido ...CALVE ESTO !)

const menosGente = nombres.slice(0,2)
console.log(menosGente)

// indexOf() permite obtener el indice de cierto elemento del Array
// Si el elemento no existe devuelve -1

console.log(nombres)
console.log(nombres.indexOf('Richard'));
console.log(nombres.indexOf('Juan'));
console.log(nombres.indexOf('Masdasd'));

// METODO INCLUDES para saber si el elemento existe en un Array 
// Para mi conviene usar indexOf() ya que si existe te dice donde esta y si no existe te dice -1 , a lo unico q quieras respuestas booleanas

console.log(nombres.includes('asd')) // false
console.log(nombres.includes('Juan')) // true

// REVERSE - INVIERTE EL ORDEN DE LOS ELEMENTOS DEL ARRAY
// MODIFICA EL ARRAY ORIGINAL

console.log(nombres)
console.log(nombres.reverse())
console.log(nombres.reverse())