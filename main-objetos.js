// // Objetos

// // let nombre = "Lucas";
// // let apellido = "Ruiz";


// // const tutorAdjunto = {
// //     lastname: "Alvarado",
// //     name: "Diego",
// //     // provincia: "Provincia en la que nació"
// // };

// // const tutorRegular = {
// //     name: "Damián",
// //     lastname: "González"
// // };

// // const profesor = {
// //     edad: 17,
// //     lastname: "Ruiz",
// //     name: "Lucas",
// // };


// // console.log(profesor.name);   // Lucas

// // console.log(profesor.edad);
// // console.log(profesor["edad"]);

// // console.log(tutorAdjunto.name);
// // console.log(tutorAdjunto["name"]);

// // console.log(tutorRegular.lastname);
// // console.log(tutorRegular["lastname"]);

// // profesor.name = "Lucas Gabriel";
// // // profesor["name"] = "Lucas Gabriel";

// // console.log(profesor.name + "Lucas");


// // function Auto(obj) {
// //     this.marca = obj.marca;
// //     this.color = obj.color;
// //     this.modelo = obj.modelo;
// //     this.creador = "Lucas"
// //     this.datos = () => { console.log("Este auto es un " + this.marca + ", de color " + this.color) }
// // }

// // let nuevoAuto = {
// //     tipo: "VW",
// //     tonos: "Rojo",
// //     anio: 2021
// // }

// // let autoSinMetodo = {
// //     nombre: "Auto"
// // }

// // let nuevoAutoConNew = new Auto({ marca: "VW", color: "Blanco", modelo: 2022 });
// // // let otroAutoConNew = new Auto()

// // console.log(nuevoAutoConNew);

// // nuevoAutoConNew.datos();
// // // autoSinMetodo.datos();

// // // Operador in ---> Recibe nombre de propiedad, "in", objeto a corroborar

// // console.log("kilometraje" in nuevoAutoConNew)

// // Operador for in

// // for(const prop in nuevoAutoConNew){
// //     console.log("Nombre de la propiedad")
// //     console.log(prop)
// //     console.log("-")
// //     console.log("Valor de esa propiedad")
// //     console.log(nuevoAutoConNew[prop])
// //     console.log("-")
// // }

// // function Auto(obj) {
// //     this.marca = obj.marca;
// //     this.color = obj.color;
// //     this.modelo = obj.modelo;
// //     this.creador = "Lucas"
// //     this.datos = () => { console.log("Este auto es un " + this.marca + ", de color " + this.color) }
// // }

// // // for(const prop in nuevoAutoConNew){
// // //     console.log(prop)
// // // }

// // for(const prop in nuevoAutoConNew){
// //     console.log(nuevoAutoConNew["prop"])
// // }

// // class Persona {
// //     constructor(nombre, apellido, edad) {
// //         this.nombre = nombre;
// //         this.apellido = apellido;
// //         this.edad = edad;
// //     }
// // }

// // class Persona {
// //     constructor(nombre, apellido, edad) {
// //         this.nombre = nombre;
// //         this.apellido = apellido;
// //         this.edad = edad;
// //     }
// //     saludar(){
// //         console.log("Hola, mucho gusto")
// //     }
// // }

// // let nuevaPersona = new Persona("Juan", "Perez", 100);

// // console.log(nuevaPersona);
// // nuevaPersona.saludar();


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// const producto3 = {
//     nombre: "ARVEJAS",
//     precio: 15.5,
//     vendido: false,
// }

// console.log("Producto antes de sumar IVA")
// console.log(producto1)
// console.log(producto2)

// producto1.sumaIva();
// producto2.sumaIva();

// console.log("Producto después de sumar IVA")
// console.log(producto1)
// console.log(producto2)

// producto1.vender();

// console.log("Producto después de vender el producto 1")
// console.log(producto1)
// console.log(producto2)

// producto3.sumaIva();