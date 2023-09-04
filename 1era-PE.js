let propuesta;
let alquiler = "1. Mini Bar portatil = $500.\n2. Bar Truck = $1000."
let planes = "1. Plan Basico\n2. Plan Premium.\n3 - Plan Vip.\n\nPara salir ingrese 0 "
let invitados;

function main() {

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
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.enOferta = false;
        this.stock = 10;
        this.categoria = categoria;
    }
}

function mensajeCerrar() {
    alert("Gracias por contactarnos.");
}

function verCocteles() {
    if (arrayCocteles.length === 0) {
        alert("no hay cocteles disponibles.")
    } else {
        let arrayNombres = [];
        for (let i = 0; i < arrayCocteles.length; i++) {
        let nombre = (i + 1) + ". " + arrayCocteles[i].nombre + " " + arrayCocteles[i].categoria;
        arrayNombres.push(nombre);
        };

        let arrayAString = arrayNombres.join("\n")
        alert(arrayAString);
    };
};
/*       let arrayCoctelesDisponibles = arrayCocteles.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n")

        arrayCoctelesDisponibles.join("\n")
        alert(CoctelesDisponibles);
    };
    */


function mostrarBares(rent) {
    switch (rent) {
        case 0:
            alert ("Gracias por contactarnos");
            break;
        case 1:
            alert("El precio del mini bar es $2500");
            break;
        case 2:
            alert("El precio del bar truck es $4500");
            break;
        default:
            alert("Seleccione una opcion valida");
    };
};



function mostrarPlanes(planes) {
    switch (planes) {
        case 0:
            alert ("Gracias por contactarnos");
            break;
        case 1:
            alert("El precio es $5000");
            break;
        case 2:
            alert("El precio es $7000");
            break;
        case 3:
            alert("El precio es $9000");
            break;
        default:
            alert("Seleccione una opcion valida");
    };
};

function infoInvitados(invitados){
    while ((invitados !==0) || (invitados>99)) {
        if (invitados < 10) {
        alert("Para la cantidad de " + invitados + " invitados, incluimos 50 cocteles y 1 bartender");  
        alert("El costo es de 500$");
        }else if ((invitados>9) && (invitados<31)){
            alert("Para la cantidad de " + invitados + " invitados, incluimos 150 cocteles e y 2 bartenders");
            alert("El costo es de 1000$");
        } else if ((invitados>30) && (invitados<100)){
            alert("Para la cantidad de " + invitados + " invitados, incluimos 250 cocteles e 2 bartender con 1 barback");
            alert("El costo es de 1500$");
        }    else{
            alert("Ingresar un numero de invitados entre 10 y 100")
        }
        if (invitados == o) {
            alert ("Gracias por contactanos")
        }
    }
}

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
        alert("ingresa una opcion valida o '0' para salir.");
    } else if (opcionIncorrecta !==""){
        alert("Ingresar una opcion valida");
    }else {
        alert("Ingresar una opcion valida");
    }
};

do {
    propuesta = parseInt(prompt("Para conocer requerimientos, costos y opciones para su evento incie el proceso marcando '1'\n\n1) Opciones de Alquiler de Bares para tu evento.\n2. Planes en Cocteles\n3. Costo de Staff\n4. Cocteles disponibles.\n5. Filtrar por Cocteles. \n6. Filtrar por Precio.\n7. Ingresar Coctel al Inventario.\n8. Eliminar Coctel del Inventario.\n9. Modificar Inventario.\n10. Filtrar por Cocteles.\n5. Filtrar por Cocteles.\n\nPara salir ingrese 0"));
        switch (propuesta) {
            case 0:
                mensajeCerrar();
                break;
            case 1:
                let rent = parseInt(prompt("Contamos con dos opciones de bares para sus eventos: \n\n1- Mini Bar\n2- Bar Truck "));
                mostrarBares(rent);
            case 2:
                let planes = parseInt(prompt("Escoja el plan de su preferencia:\n\n1- Plan Basico\n2- Plan Premium.\n3- Plan Vip\n\nPara salir ingrese 0"));
                mostrarPlanes(planes);
            case 3:
                let invitados = parseInt(prompt("Indique la cantidad aproximada de invitados que tendra en su evento:"))
                infoInvitados(invitados);
            case 4:
                verCocteles();
            case 5: 
                filtrarPorPlan();
            case 6:
                filtrarPorPrecio();
            case 7:
                ingresarCoctel();
            case 8:
                eliminarCoctel();
            case 9:
                modificarStock():
            case 10:
                errorEnLaOperacion(opcionIncorrecta):
                
        }
} while (propuesta !==0);
};

main()


