function main() {
const cocteles = [
    {   
        id: 1,
        nombre: "Margarita",
        precio: 5,
        licor: "Tequila",
        stock: 30,
        plan: "Plan Basico",
        disponible: true,
        cristaleria: "Copa Coupe",
    },
    {   
        id: 2,
        nombre: "Daikiri",
        precio: 5,
        licor: "Ron",
        stock: 25,
        plan: "Plan Basico",
        disponible: false,
        cristaleria: "Copa Martini",
    },
    {   
        id: 3,
        nombre: "Moscow Mule",
        precio: 7,
        licor: "Vodka",
        stock: 35,
        plan: "Plan Premium",
        disponible: true,
        cristaleria: "Vaso Corto",
    },
    {   
        id: 4,
        nombre: "Negroni",
        precio: 7,
        licor: "Ginebra",
        stock: 20,
        plan: "Plan Premium",
        disponible: false,
        cristaleria: "Vaso Corto",
    },
    {   
        id: 5,
        nombre: "Aperol Spritz",
        precio: 9,
        licor: "Aperol",
        stock: 15,
        plan: "Plan VIP",
        disponible: true,
        cristaleria: "Copa Ballon",
    },
    {   
        id: 6,
        nombre: "Old Fashioned",
        precio: 9,
        licor: "Bourbon",
        stock: 22,
        plan: "Plan VIP",
        disponible: true,
        cristaleria: "Vaso Corto",
    },
];

class inventario{
    constructor(id, nombre, precio, licor, stock, plan, cristaleria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.licor = licor;
        this.stock = stock;
        this.plan = plan;
        this.disponible = true;
        this.cristaleria = cristaleria;   
    }
}


function mensajeFinalizar(){
    alert("Gracias por contactarnos.")
};

function generarMensaje(array) {
    let mensaje = "";
    array.forEach((el) => mensaje += `
    ${el.id}) - ${el.nombre} - ${el.plan} - ${el.cristaleria} - $${el.precio}
    `);

    return mensaje;
}

function verCocteles () {
    let mensajeCocteles = generarMensaje (cocteles, "Esta es nuestra lista de cocteles:\n\n");
    alert(mensajeCocteles);
};

function disponibilidad () {
    let coctelesDisponibles = cocteles.filter((el) => el.disponible);

    let mensajeDisponibilidad = generarMensaje (coctelesDisponibles, "Actualmente tenemos disponible los siguientes cocteles:\n\n")
    alert(mensajeDisponibilidad);
}

function agregarCoctel () {
    let id = parseInt(prompt("Ingrese numero de Id"
    ));
    let nombre = prompt("Cual es el nombre del coctel?");
    let precio = parseInt(prompt("introduzca el precio por botella del licor"));
    let licor = prompt("Que tipo de licor lleva el coctel?");
    let stock = parseInt(prompt("Cual es el stock de botellas"));
    let plan = prompt("Cual es el plan correspondiente al coctel?");
    let cristaleria = prompt("Que tipo de copa es la adecuada?");

    if(cocteles.some(el => el.id === id)){
        alert ("Ya existe un coctel con ese id " + id);

    } else{
        if (nombre !== "" && precio > 0 && stock > 0 ) {
            let nuevoCoctel = new inventario(id, nombre, precio, licor, plan, stock, cristaleria);

            cocteles.push(nuevoCoctel);
        } else {
            alert("ingresaste info invalida. Intente de nuevo ")
        }
    };
};

function mostrarBares (rent){
    switch (rent) {
        case 0:
            alert ("menu principal");
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
}

function infoInvitados (invitados){
    while ((invitados !==0) || (invitados>99)) {
        if (invitados < 10) {
        alert("Para la cantidad de " + invitados + " cubrimos 50 cocteles e incluimos un bartender");  
        alert("El costo es de 500$");
        }else if ((invitados>9) && (invitados<31)){
            alert("Para la cantidad de " + invitados + " cubrimos 150 cocteles e incluimos dos bartender");
            alert("El costo es de 1000$");
        } else if ((invitados>30) && (invitados<100)){
            alert("Para la cantidad de " + invitados + " cubrimos 250 cocteles e incluimos dos bartender mas un barback");
            alert("El costo es de 1500$");
        }    else{
            alert("Ingresar un numero de invitados entre 10 y 100")
        }
        if (invitados == o) {
            alert ("Gracias por contactanos")
        }
    }

}

let opcion;

do {
    opcion = prompt("Estas ingresando al sistema de cotizacion de servicios de bartending para eventos.\n\n1. Para 1. Para ver la lista de cocteles y precios.\n2. Para consultar disponibilidad.\n3. Para filtrarlos por precio unitario,\n4. Para ingresar un nuevo coctel al sistema\n5. Costos asociados al servicio y alquiler de bares.\n6. Costo segun cantidad de invitados\n\n Para salir, ingrese 0");

    switch (opcion) {
        case "0":
            mensajeFinalizar();
            break;
        case "1":
            verCocteles();
            break;
        case "2":
            disponibilidad();
            break;
        case "3":
            filtrarPorPrecio();
            break;
        case "4":
            agregarCoctel();
            break;
        case "5":
            let rent = parseInt(prompt("Contamos con dos opciones de bares para sus eventos: \n\n1- Mini Bar\n2- Bar Truck\n3xs- Solo servicio de bartending.\n\n0- Para volver al inciio"));
            mostrarBares(rent);
            break;
        case "6":
            let invitados =  parseInt(prompt("Indique la cantidad aproximada de invitados que tendra en su evento:"))
            infoInvitados(invitados);
        default:
            alert("Por favor ingrese una opcion valida")
            break;
        }
    } while (opcion !== "0")


}
main();