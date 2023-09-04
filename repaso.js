// Funciones

// Definición: bloque de código que nos indica una serie de pasos (algoritmo) a seguir para desarrollar al momento de ejecutarla / llamarla / invocarla.

// - Manera tradicional:

// Utilizamos la palabra reservada "function", ponemos el nombre de la función, abrimos paréntesis y ponemos dentro el/los parámetro/s (en caso de ser necesario, puede tener uno, dos, mil o ninguno). Abrimos llaves y dentro de las llaves va el bloque de código

// Ejemplo:

function funcionTradicionalDePrueba(parametro1, parametro2) {
    // Lógica de la función.
};

// - Funciones anónimas:

// Declaramos una constante con el nombre que queremos darle a la función y le vamos a asignar el valor de una función anónima. Cómo hacemos esto? Escribimos la palabra function, abrimos paréntesis con parámetros de ser necesario y abrimos las llaves. (Idéntico a la manera tradicional pero sin ponerle nombre después de function)

// Ejemplo:

const funcionAnonimaDePrueba = function (parametro1, parametro2) {
    // Lógica de la función.
};

// - Funciones flecha:

// Mismo caso que el anterior, pero distinta sintaxis. En este caso abrimos los paréntesis, ponemos los parámetros de ser necesario y "dibujamos" la flecha con = y >. Luego abrimos llaves y ponemos el bloque de código

// OBSERVACIÓN: LAS FUNCIONES FLECHA TIENEN LA PARTICULARIDAD QUE SI SE LAS DECLARA EN UNA ÚNICA LÍNEA DE CÓDIGO, POSEEN UN "RETURN" IMPLÍCITO. ES DECIR, NO TENEMOS QUE ESCRIBIR LA PALABRA RETURN.

// Ejemplo:

const funcionFlechaDePrueba = (parametro1, parametro2) => {
    // return parametro1 + parametro2
    // Lógica de la función.
};

const funcionFlechaConReturn = (parametro1, parametro2) => { parametro1 + parametro2 };
// Es lo mismo que esto de abajo
// const funcionFlechaConReturn = (parametro1, parametro2) => { return parametro1 + parametro2 }



// -------------------------------------------------------------------------------

// Objetos

// Definición: colección de datos relacionados como una entidad. Se conforman por la relación "clave-valor". Clave? el nombre de la propiedad. Valor? valga la redundancia.

// Cómo se declara un objeto? Declaramos una variable, ponemos el nombre, abrimos llaves y ponemos clave: valor, clave2: valor2, etc.

const objetoLiteral = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
    propiedad4: "valor4",
};

// Clases constructoras

// Sintaxis: escribimos class, luego el nombre de la clase con PascalCase, abrimos llaves, dentro de las llaves ponemos constructor, abrimos paréntesis y mandamos los parámetros que vaya a recibir la clase. Luego volvemos a abrir llaves y escribimos utilizando THIS el nombre de cada propiedad, igual, el valor que va a tomar la propiedad. Separados con PUNTO Y COMA.

class ObjetoNuevo {
    constructor(propiedad1, propiedad2, propiedad3, propiedad4) {
        this.propiedad1 = propiedad1;
        this.propiedad2 = propiedad2;
        this.propiedad3 = propiedad3;
        this.propiedad4 = propiedad4;
    }
    metodo1() {
        // Lógica del método
    }
}

// Para instanciar, creamos una nueva variable y escribimos la palabra new, el nombre de la clase y le pasamos los parámetros

// Ejemplo

let nuevoObjetoConClase = new ObjetoNuevo("valor1", "valor2", "valor3", "valor4");

// Cómo accedemos al valor de alguna propiedad de un objeto?

// Dot notation (RECOMENDADA)

// Dot singifica PUNTO. Escribimos el nombre del objeto, un punto, y el nombre de la propiedad.

nuevoObjetoConClase.propiedad1 = "VALOR1" // "VALOR1"

// Bracket notation

// Bracket significa CORCHETES. Escribimos el nombre del objeto, abrimos corchetes y el nombre de la propiedad pero EN STRING.

nuevoObjetoConClase["propiedad2"] // "valor2"

// -------------------------------------------------------------------------------

// Arrays

// Definición: tipo de dato para almacenar valores en forma de lista. Cada valor tiene su posición (índice) determinada dentro de la lista. IMPORTANTE: empezamos desde la posición 0, no desde el 1, como estamos acostumbrados a contar

// Para declarar un array creamos una variable, le ponemos nombre, igual, abrimos corchetes y ponemos dentro la información que queremos.

// Ejemplo

//                          0             1
const arrayDePrueba = ["Posición 0", "Posición 1"];

// Cómo accedemos a un elemento específico de un array?

// Bracket notation

// Escribimos el nombre del array, abrimos corchetes y escribimos dentro el número de la posición del elemento que queremos

arrayDePrueba[0] // "Posición 0"
arrayDePrueba[1] = "Cambio de valor"; // "Cambio de valor"

// Métodos para agregar / eliminar elementos de un array.

// Agregar:

// PUSH Y UNSHIFT: se escribe el array al que queremos agregarle el elemento nuevo, punto, nombre del método, entre paréntesis mandamos el elemento que queremos agregar al array y dependiendo si es push o unshift se agrega al final o al principio del array RESPECTIVAMENTE.

arrayDePrueba.push("Otra cosa");
arrayDePrueba.unshift("Primera cosa");

// Eliminar:

// POP Y SHIFT: se escribe el array al que queremos quitarle un elemento, punto, nombre del método, abrimos y cerramos paréntesis, y dependiendo si es pop o shift se elimina el elemento situado al final o al principio del array RESPECTIVAMENTE.

arrayDePrueba.pop(); // Eliminaría "Otra cosa";
arrayDePrueba.shift(); // Eliminaría "Primera cosa";


// Funciones de orden superior

// Lo principal es que una función puede RETORNAR OTRA FUNCIÓN o bien RECIBIR FUNCIONES POR PARÁMETROS.

arrayDePrueba.forEach((el) => console.log(el));

// SON LO MISMO

for (let i = 0; i < arrayDePrueba.length; i++) {
    console.log(arrayDePrueba[i])
}

// Truco de length ---> Para length: LOS GATITOS TIENEN HAMBRE (GTH);

// nombre de array, punto, nombre del método, paréntesis y función flecha donde ponemos la lógica que queremos buscar.

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let indiceDel3 = arrayNumeros.indexOf(el => el === 3) // 2
arrayNumeros.splice(indiceDel3, 1);

let arrayMayorQue5 = arrayNumeros.filter(el => el > 5) // [6,7,8,9]
let arraySin3 = arrayNumeros.filter(el => el !== 3) // [1,2,4,5,6,7,8,9]
let arrayCon3 = arrayNumeros.filter(el => el === 3) // [3]
let arrayCon23 = arrayNumeros.filter(el => el === 23) // []

arrayCon23.length // 0