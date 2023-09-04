// function saludarAAlguien(nombre) {
//     return (tipoDeSaludo) => {
//         if (tipoDeSaludo === 1) {
//             console.log("Hola, " + nombre + ". Mucho gusto");
//         } else if (tipoDeSaludo === 2) {
//             console.log("Ey, " + nombre + "! Cómo estás? Qué lindo verte");
//         } else if (tipoDeSaludo === 3) {
//             console.log("Cómo anda mi herrrrrmano querido " + nombre + "?");
//         } else {
//             console.log("Hi " + nombre)
//         }
//     }
// }

// const saludarALucas = saludarAAlguien("Lucas");

// // let tipoDeSaludo = parseInt(prompt("Selecciona un número de confianza para el tipo de saludo. Del 1 al 4"));

// saludarALucas(1);
// saludarALucas(2);
// saludarALucas(3);
// saludarALucas(4);

// function calculadora(operacion) {
//     if (operacion === "+") {
//         return (a, b) => console.log(a + b)
//     } else if (operacion === "-") {
//         return (a, b) => console.log(a - b)
//     } else if (operacion === "*") {
//         return (a, b) => console.log(a * b)
//     } else if (operacion === "/") {
//         return (a, b) => {
//             if (b > 0) {
//                 console.log(a / b)
//             } else {
//                 console.log("No se puede dividir en 0.")
//             };
//         };
//     } else {
//         return () => console.log("No es una operación válida.")
//     };
// };

// let sumaPorCalculadora = calculadora("+")
// let restaPorCalculadora = calculadora("-")
// let productoPorCalculadora = calculadora("*")
// let cocientePorCalculadora = calculadora("/")

// sumaPorCalculadora(1, 2)
// restaPorCalculadora(1, 2)
// productoPorCalculadora(1, 2)
// cocientePorCalculadora(1, 2)

// function concatenarYMostrar(string1, string2, funcionDeSalida) {
//     funcionDeSalida(string1 + string2);
// }

// concatenarYMostrar("Hola ", "Mundo!", console.log);