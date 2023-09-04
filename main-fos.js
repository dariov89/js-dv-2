// Resumen:

// Una función puede retornar otra función. La primera función sería una especie de función "generadora" de funciones. Ejemplo de mayorQue o el ejemplo del saludo.

// Una función puede RECIBIR por parámetro otra función y utilizarla dentro de su lógica

// function porCadaUno(arr, fn) {
//     for (const elemento of arr) {
//         fn(elemento)
//     }
// }

// porCadaUno([1,2,3], alert)

// function porCadaUno(arr){
//     for (const elemento of arr) {
//         alert(elemento)
//     }
// }


// porCadaUno([1,2,3], console.log)

// function porCadaUno(arr){
//     for (const elemento of arr) {
//         console.log(elemento)
//     }
// }

const arrayAlumnos = [

    {
        nombre: "Lucas",
        apellido: "Ruiz",
        correo: "lucas@coder.com",
        curso: "JavaScript - Comisión 47025",
        aprobado: false,
        nota: 4
    },
    {
        nombre: "Juan",
        apellido: "Pérez",
        correo: "juan@coder.com",
        curso: "JavaScript - Comisión 47025",
        aprobado: true,
        nota: 6
    },
    {
        nombre: "José",
        apellido: "López",
        correo: "jose@coder.com",
        curso: "JavaScript - Comisión 47025",
        aprobado: true,
        nota: 10
    },
    {
        nombre: "Juan",
        apellido: "López",
        correo: "josejuan@coder.com",
        curso: "JavaScript - Comisión 47025",
        aprobado: false,
        nota: 2
    },

];

class Alumno {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.curso = "JavaScript - Comisión 47025";
        this.aprobado = false;
    }

    aprobarAlumno() {
        this.aprobado = true;
    };

    // metodo(){
    //     // Pueden agregar el método que consideren necesario.
    // }
}

function leerListaDeAlumnos() {
    // Aquí va el código
    // Tarea: Hacerlo con for of
    if (arrayAlumnos.length === 0) {
        alert("No tenés alumnos. Cargá urgente alguno para aprovechar esta funcionalidad");
    } else {
        let arrayNombres = [];

        for (let i = 0; i < arrayAlumnos.length; i++) {
            let nombre = (i + 1) + ". " + arrayAlumnos[i].nombre + " " + arrayAlumnos[i].apellido;
            arrayNombres.push(nombre);
        };

        let arrayAString = arrayNombres.join("\n")
        alert(arrayAString);
    };
};

function crearNuevoAlumno() {
    // Aquí va el código

    let nombre = prompt("Ingrese nombre del alumno.");
    let apellido = prompt("Ingrese apellido del alumno.");
    let correo = prompt("Ingrese correo del alumno.");

    let nuevoAlumnoParaAgregar = new Alumno(nombre, apellido, correo);

    // let mensaje = `
    // Nombre: ${nuevoAlumnoParaAgregar.nombre}
    // Apellido: ${nuevoAlumnoParaAgregar.apellido}
    // Correo: ${nuevoAlumnoParaAgregar.correo}
    // `

    // alert(mensaje);

    if (arrayAlumnos.length === 0) {
        arrayAlumnos.push(nuevoAlumnoParaAgregar);
        alert("Felicidades, agregaste tu primer alumno. Su apellido es: " + nuevoAlumnoParaAgregar.apellido);
    } else {
        arrayAlumnos.push(nuevoAlumnoParaAgregar);
        alert("Alumno " + nuevoAlumnoParaAgregar.apellido + " agregado con éxito");
    }

    // arrayAlumnos.push(new Alumno(nombre, apellido, correo))

};

function eliminarUnAlumno( /*Aquí van los parámetros de ser necesarios*/) {
    // Aquí va el código

    // Pista: encontramos el índice y utilizamos splice para eliminar ese objeto de la siguiente manera:

    //array.splice(indice, 1);

};

function metodosDeBusqueda() {
    // Aquí va el código

    // Ponemos el título del método, devolvemos un console log y luego lo dejamos comentado para ir probando varios de los que tenemos. Como tarea pensamos qué podemos hacer con ellos.


    // // FOR EACH

    // arrayAlumnos.forEach((el) => console.log(el))
    // alert("For each realizado. Revisar consola.")

    // // FIND

    // let buscarAprobado = arrayAlumnos.find((el) => el.correo === "Jose@coder.com")
    // console.log(buscarAprobado)
    // alert("Find realizado. Revisar consola.")

    // // FILTER

    // let todosLosAprobados = arrayAlumnos.filter(el => el.aprobado)
    // console.log(todosLosAprobados)
    // alert("Filter realizado. Revisar consola.")

    // // SOME

    // let algunoEnJavaScript = arrayAlumnos.some(el => el.nombre === "Juan")
    // console.log(algunoEnJavaScript)
    // alert("Some realizado. Revisar consola.")

    // // MAP

    // let nuevoArraySoloNombreCompleto = arrayAlumnos.map(el => {
    //     return {
    //         nombreCompleto: el.nombre + " " + el.apellido
    //     }
    // })

    // console.log(nuevoArraySoloNombreCompleto)
    // alert("Map realizado. Revisar consola.")


    // // SORT

    // Ordenando por nota o algo numérico
    // let arrayOrdenado = arrayAlumnos.sort((a,b) => b.nota - a.nota)
    // console.log(arrayOrdenado)
    // alert("Sort realizado. Revisar consola.")


    // Ordenando alfabéticamente

    // let arrayOrdenado = arrayAlumnos.sort((a,b) => {
    //     if(a.nombre > b.nombre){
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })

    // console.log(arrayOrdenado);
    // alert("Sort realizado. Revisar consola.")

}



let opcion;
do {

    opcion = parseInt(prompt("Bienvenido al sistema de gestión de alumnos.\n\n1. Para consultar la lista de alumnos.\n2. Para agregar un alumno nuevo.\n3. Para eliminar un alumno.\n4. Para probar métodos.\n\nIngrese 0 para salir."));

    switch (opcion) {
        case 0:
            alert("Muchas gracias por su visita, lo esperamos pronto.");
            break;
        case 1:
            // alert("Hay que crear una función para leer la lista de alumnos.");
            leerListaDeAlumnos();
            break;
        case 2:
            crearNuevoAlumno();
            break;
        case 3:
            alert("Hay que crear una función para eliminar un alumno de la lista.");
            // eliminarUnAlumno( /*Aquí van los parámetros de ser necesarios*/ );
            break;
        case 4:
            metodosDeBusqueda();
            break;
        default:
            alert("Opción inválida. Ingrese una opción válida por favor.");
            break;
    }

} while (opcion !== 0);
