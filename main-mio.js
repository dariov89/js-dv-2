function main() {
    let opcion;

const arrayCocteles = [
{   
    nombre: "Margarita",
    precio: 5,
    licor: "tequila",
    stock: 30,
    plan: 1,
    disponible: true,
    cristaleria: "copa coupe",
},
{   
    nombre: "Daikiri",
    precio: 5,
    licor: "ron",
    stock: 25,
    plan: 1,
    disponible: true,
    cristaleria: "copa martini",
},
{   
    nombre: "Moscow Mule",
    precio: 7,
    licor: "vodka",
    stock: 35,
    plan: 2,
    disponible: true,
    cristaleria: "vaso corto",
},
{   
    nombre: "Negroni",
    precio: 7,
    licor: "ginebra",
    stock: 20,
    plan: 2,
    disponible: true,
    cristaleria: "vaso corto",
},
{   
    nombre: "Aperol Spritz",
    precio: 9,
    licor: "aperol",
    stock: 15,
    plan: 3,
    disponible: true,
    cristaleria: "copa ballon",
},
{   
    nombre: "Old Fashioned",
    precio: 9,
    licor: "bourbon",
    stock: 22,
    plan: 3,
    disponible: true,
    cristaleria: "vaso corto",
},
]

const arrayPlanes = [
    {
        num: 1,
        plan: "basico",
    },
    {
        num: 2,
        plan: "premium",
    },
    {
        num: 3,
        plan: "vip",
    },
]

class coctel {
    constructor(nombre, precio, plan) {
        this.nombre = nombre;
        this.precio = precio;
        this.licor = licor;
        this.stock = 15;
        this.plan = plan;
        this.disponible = true;
        this.cristaleria = cristaleria;
    }
}

function mensajeFinalizar() {

    alert ("gracias por contactarnos.");
};

let cantidad = 6
function verCocteles() {
/*    if (arrayCocteles.lenght === 0) {
        alert("no hay licores en stock, por ende, no hay cocteles.")
    } else {
        let arrayNombres = arrayCocteles.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n")

        arrayNombres.join("\n")
        alert(arrayNombres);
    };
};
*/

do {
    let entrada = prompt ("Ingresar coctel");
    arrayCocteles.push(entrada.toUpperCase());
    console.log(arrayCocteles.elngth);

} while (arrayCocteles.length != cantidad)
const nuevosCocteles = arrayCocteles.concat([]);
alert( nuevosCocteles.join("\n"))


function filtrarPorPlan() {

    if (arrayPlanes.lenght ===0) {
        alert("crea algun plan para categorizar los cocteles");
    } else {
        let arrayNombresPlanes = arrayPlanes.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n");

        alert(arrayNombresPlanes);
    };

    let filtrarPorPlan = parseInt(prompt("ingresa el Plan que desea ver"));

    let coctelesDelPlanSeleccionado = arrayCocteles.filter(el => el.plan === filtrarPorPlan);

    if(coctelesDelPlanSeleccionado.lenght > 0){
        let listaFiltradaCocteles = coctelesDelPlanSeleccionado.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n");

        alert (listaFiltradaCocteles);
    } else{
        alert("no hay cocteles disponibles para ese plan");
    };
};


function filtrarPorPrecio (){

};

function ingresarCoctel() {

    let nombre = prompt("Ingrese el nombre del coctel");
    let precio = parseInt(prompt("Ingrese el precio unitario del coctel"));
    let plan = parseInt(prompt ("Ingrese el numero del plan corresponiente al coctel"));


    if (!IsNaN(precio) && !IsNan(plan) && precio > 0 && plan > 0) {
        let nuevoCoctel = new coctel(nombre, precio, licor, plan);
        arrayCocteles.push(nuevoCoctel);
        alert("Coctel " + nuevoCoctel.nombre + " agregado a la lista y plan");
    } else {
        alert("Precio o plan incorrecto. Asignar un valor correcto.")
    }
};

function eliminarCoctel() {
};

function modificarStock() {
};

function errorEnLaOperacion(opcionIncorrecta) {

    if (opcionIncorrecta === null) {
        alert("ingresa una opcion valida o "0" para salir.");
    } else if (opcionIncorrecta !==""){
        alert("Ingresar una opcion valida");
    }else {
        alert("Ingresar una opcion valida");
    }
};

do {
    opcion = prompt("Estas ingresando al sistema de inventario de cocteles y servicios de bartending.\n\n1. Para ver los cocteles disponibles.\n2. Para filtrarlos por plan.\n3. Para filtrarlos por precio unitario,\n4. Para ingresar un nuevo coctel al sistema\n5. Para eliminar un coctel del sistema.\n6. Para modificar el stock de un licor en particular\n\n Para salir, ingrese 0");

    switch (opcion) {
        case "0":
            mensajeFinalizar();
            break;
        case "1":
            verCocteles();
            break;
        case "2":
            filtrarPorPlan();
            break;
        case "3":
            filtrarPorPrecio();
            break;
        case "4":
            ingresarCoctel();
            break;
        case "5":
            eliminarCoctel();
            break;
        case "6":
            modificarStock();
            break;
        default:
            errorEnLaOperacion(opcion);
            break;
        }
    } while (opcion !== "0")
}
}
main();

//    let cristaleria = prompt("Ingrese el tipo de cristaleria correspondiente al coctel");