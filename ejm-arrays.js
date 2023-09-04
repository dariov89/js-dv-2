const arrayAlumnos = [

    // {
    //     nombre: "Lucas",
    //     apellido: "Ruiz",
    //     correo: "lucas@coder.com",
    //     curso: "JavaScript - Comisión 47025",
    //     aprobado: false,
    // },
    // {
    //     nombre: "Juan",
    //     apellido: "Pérez",
    //     correo: "juan@coder.com",
    //     curso: "JavaScript - Comisión 47025",
    //     aprobado: true,
    // }

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

    let mensaje = `
    Nombre: ${nuevoAlumnoParaAgregar.nombre}
    Apellido: ${nuevoAlumnoParaAgregar.apellido}
    Correo: ${nuevoAlumnoParaAgregar.correo}
    `

    alert(mensaje);
    
    if(arrayAlumnos.length === 0){
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



let opcion;
do {

    opcion = parseInt(prompt("Bienvenido al sistema de gestión de alumnos.\n\n1. Para consultar la lista de alumnos.\n2. Para agregar un alumno nuevo.\n3. Para eliminar un alumno.\n\nIngrese 0 para salir."));

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
        default:
            alert("Opción inválida. Ingrese una opción válida por favor.");
            break;
    }

} while (opcion !== 0);



/*

Tarea: Agregar una funcionalidad nueva a nuestro programa. Algunos ejemplos:

-Mostrar solo alumnos aprobados.
-Aprobar / desaprobar a todos los alumnos.
-Crear una nueva lista de alumnos "destacados", "que requieran trabajo extra", "favoritos", etc.
-Modificar información de algún alumno en específico (puede ser nombre, apellido, correo, aprobarlo, etc., no necesariamente tiene que elegir el usuario entre todas estas opciones: pueden simplemente hacer una función para modificar el nombre y es suficiente).

Cualquier otra opción que se les ocurra fuera de estos ejemplos también es válida mientras apliquen algo de la clase de arrays.

Como recomendaciones: siéntanse en total libertad de crear variables nuevas, agregar métodos nuevos, modificar la clase constructora y todo lo que consideren necesario. Además, cabe destacar que el do while que posee un switch ya está estructurado para que solamente agreguen case 4 y la función que vayan a desarrollar (con break al final).

Si quieren desarrollar más de una funcionalidad nueva los invito a hacerlo a modo de práctica. Les va a servir para ejercitar más aún el pensamiento de programación. En caso que se compliquen, no duden en consultar a CoderAsk.

Recomiendo mucho para estos casos reunirse entre ustedes si así lo desean. Siempre está bueno tener una segunda mirada de una resolución problemática y está bueno ver a otro hacer código para aprender a leer código ajeno.



*/