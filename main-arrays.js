// // Arrays: listas de datos. Ejemplo práctico: un mueble (array) tiene cajones para guardar lo que quiera de información (cada elemento es un cajón y su contenido es el valor de cada elemento).

// // Propiedad length: la propiedad length de un array nos devuelve la longitud del array. Qué quiere decir esto? Que nos va a devolver el número con la cantidad de elementos que tiene ese array.

// // Ejemplo const array2 = [1,2] ---> Si hago array2.length me va a devolver 2
// // Ejemplo const array5 = [1,2,2,3,1] ---> Si hago array2.length me va a devolver 5

// // Ejemplo de un carrito

// // const carrito = [];
// // // console.log(carrito);

// // const productoDePrueba = {
// //     nombre: "Test"
// // }

// // carrito.push(productoDePrueba);
// // // console.log(carrito);
// // carrito.push(productoDePrueba);
// // console.log(carrito);


// // PUSH Y UNSHIFT para agregar al final y al principio del array respectivamente
// // POP Y SHIFT para eliminar el elemento ubicado al final y al principio del array respectivamente

// // Splice para eliminar uno o más elementos específicos

// // array.splice(indice, cantidadDeElementos) INCLUYENDO el elemento del índice en el que nos paramos


// // Slice para copiar una porción del array

// // array.slice(indiceInicial, indiceFinal) incluyendo el elemento del índice inicial y SIN INCLUIR el elemento del índice final


// // const array = [];

// // for(let i = 0; i < 3; i++){
// //     let nombreNuevo = prompt("Ingrese un nombre nuevo");
// //     array.push(nombreNuevo.toUpperCase());
// // };

// // console.log(array);


// const productos = [
//     { id: 1, producto: "Arroz" },
//     { id: 2, producto: "Fideo" },
//     { id: 3, producto: "Pan" },
// ];

// // FOR OF vs. FOR

// /*

// for (const nombreDeLaVariable of nombreDelArray){
//     console.log(nombreDeLaVariable)
// }

// */

// // for (const producto of productos) {
// //     console.log(producto.id);
// //     console.log(producto.producto);
// // };

// // for (let i = 0; i < productos.length; i++) {
// //     console.log(productos[i].id);
// //     console.log(productos[i].producto);
// // };
