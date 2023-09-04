const historialDeCalculos = [];

class Calculo {
    constructor(num1, num2, operacion, resultado) {
        this.primerNumero = num1;
        this.segundoNumero = num2;
        this.operacion = operacion;
        this.resultado = resultado;
    };
};

function calculadora(operacion) {
    if (operacion === "+") {
        return (a, b) => console.log(a + b) // En vez de console, deberíamos modificar la función para que haga la operación, cree el objeto y lo pushee al array de objetos
    } else if (operacion === "-") {
        return (a, b) => console.log(a - b) // En vez de console, deberíamos modificar la función para que haga la operación, cree el objeto y lo pushee al array de objetos
    } else if (operacion === "*") {
        return (a, b) => console.log(a * b) // En vez de console, deberíamos modificar la función para que haga la operación, cree el objeto y lo pushee al array de objetos
    } else if (operacion === "/") {
        return (a, b) => {
            if(b > 0){
                console.log(a / b) // En vez de console, deberíamos modificar la función para que haga la operación, cree el objeto y lo pushee al array de objetos
            } else {
                console.log("No se puede dividir en 0.")
            };
        };
    } else {
        return () => console.log("No es una operación válida.")
    };
};

function leerHistorial(){
    if (historialDeCalculos.length === 0) {
        alert("No se registraron cálculos previos");
    } else {
        let arrayCalculos = [];

        for (let i = 0; i < historialDeCalculos.length; i++) {
            let calculo = (i + 1) + ". " + historialDeCalculos[i].primerNumero + " " + historialDeCalculos[i].operacion + " " + historialDeCalculos[i].segundoNumero + " = " + historialDeCalculos[i].resultado;
            arrayCalculos.push(calculo);
        };

        let arrayAString = arrayCalculos.join("\n");
        alert(arrayAString);
    };
};

function nuevaOperacion(){
    // Aquí va el código para solicitar números, operación y utilizar la función de orden superior calculadora
};



let opcion;

do {
    opcion = parseInt(prompt("Calculadora mágica 2.0.\n\n1. Para consultar el historial de operaciones.\n2. Para una nueva operación.\n\nIngrese 0 para salir."));

    switch (opcion) {
        case 0:
            alert("Muchas gracias por su visita, lo esperamos pronto.");
            break;
        case 1:
            leerHistorial();
            break;
        case 2:
            nuevaOperacion();
            break;
        default:
            alert("Opción inválida. Ingrese una opción válida por favor.");
            break;
    };

} while (opcion !== 0);