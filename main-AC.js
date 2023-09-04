function main() {
    let opcion;

    const arrayProductos = [
        {
            nombre: "Silla gamer",
            precio: 1000,
            enOferta: false,
            stock: 10,
            categoria: 1,
        },
        {
            nombre: "Escritorio gamer",
            precio: 700,
            enOferta: false,
            stock: 10,
            categoria: 1,
        },
        {
            nombre: "Monitor gamer",
            precio: 500,
            enOferta: false,
            stock: 10,
            categoria: 2,
        },
        {
            nombre: "Lentes de descanso",
            precio: 900,
            enOferta: false,
            stock: 10,
            categoria: 3,
        },
        {
            nombre: "PC gamer",
            precio: 2100,
            enOferta: false,
            stock: 10,
            categoria: 2,
        },
    ]

    const arrayCategorias = [
        {
            id: 1,
            nombre: "Mobiliario",
        },
        {
            id: 2,
            nombre: "Informática",
        },
        {
            id: 3,
            nombre: "Otros",
        }
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

    function mensajeDeDespedida() {
        // Aquí va el código

        alert("Muchas gracias por su visita. Vuelvas prontos.");
    };

    function verProductos() {
        // Aquí va el código

        if (arrayProductos.length === 0) {
            alert("No tenés productos. Cargá urgente alguno para aprovechar esta funcionalidad");
        } else {
            // let arrayNombres = [];
            // for (let i = 0; i < arrayProductos.length; i++) {
            //     let nombre = (i + 1) + ". " + arrayProductos[i].nombre + " " + arrayProductos[i].apellido;
            //     arrayNombres.push(nombre);
            // };

            // let arrayAString = arrayNombres.join("\n")
            // alert(arrayAString);

            let arrayNombres = arrayProductos.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n")
            
            arrayNombres.join("\n")
            alert(arrayNombres);
        };
    };

    function filtrarPorCategoria() {
        // Aquí va el código

        if (arrayCategorias.length === 0) {
            alert("No tenés categorías. Cargá urgente alguna para aprovechar esta funcionalidad");
        } else {
            // let arrayNombres = [];
            // for (let i = 0; i < arrayCategorias.length; i++) {
            //     let nombre = (i + 1) + ". " + arrayCategorias[i].nombre + " " + arrayCategorias[i].apellido;
            //     arrayNombres.push(nombre);
            // };

            // let arrayAString = arrayNombres.join("\n")
            // alert(arrayAString);

            let arrayNombresCategorias = arrayCategorias.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n");

            alert(arrayNombresCategorias);

        };

        let categoriaAFiltrar = parseInt(prompt("Ingrese la categoría por la que desea filtrar"));

        // let categoriaElegida = arrayCategorias.find(el => el.id === categoriaAFiltrar)
        // console.log("Elegiste la categoría: ", categoriaElegida);

        let productosDeLaCategoriaElegida = arrayProductos.filter(el => el.categoria === categoriaAFiltrar);

        if(productosDeLaCategoriaElegida.length > 0){   
            let listaProductosFiltrado = productosDeLaCategoriaElegida.map((el, index) => (index + 1) + ". " + el.nombre.toUpperCase()).join("\n");
            
            alert(listaProductosFiltrado);
        } else {
            alert("No se encontró ningún producto con esa categoría.");
        };
    };

    function filtrarPorPrecio() {
        // Aquí va el código
    };

    function crearNuevoProducto() {
        // Aquí va el código

        let nombre = prompt("Ingrese el nombre del producto.");
        let precio = parseFloat(prompt("Ingrese el precio del producto."));
        let categoria = parseInt(prompt("Ingrese la categoría del producto."));

        if (!isNaN(precio) && !isNaN(categoria) && precio > 0 && categoria > 0) {
            let nuevoProductoParaAgregar = new Producto(nombre, precio, categoria);
            arrayProductos.push(nuevoProductoParaAgregar);
            alert("Producto " + nuevoProductoParaAgregar.nombre + " agregado con éxito!");
        } else {
            alert("Precio o categoría incorrectos. Recordá ingresar números positivos. Serás redirigido al menú principal")
        }

        // let mensaje = `
        // Nombre: ${nuevoProductoParaAgregar.nombre}
        // Apellido: ${nuevoProductoParaAgregar.apellido}
        // Correo: ${nuevoProductoParaAgregar.correo}
        // `

        // alert(mensaje);


    };

    function eliminarProducto() {
        // Aquí va el código
    };

    function modificarStock() {
        // Aquí va el código
    };

    function mensajeDeError(opcionIncorrecta) {
        // Aquí va el código
        if (opcionIncorrecta === null) {
            alert("Presionaste cancelar. No es una opción válida. Por favor, ingresá una opción válida o ingresá 0 para salir.");
        } else if (opcionIncorrecta !== "") {
            alert("Lamentablemente " + opcionIncorrecta + " no es una opción correcta. Por favor, ingresá una opción válida.");
        } else {
            alert("No ingresaste ninguna opción. Por favor, ingresá una opción válida.");
        }
    };


    do {
        opcion = prompt("Bienvenido al sistema de gestión de productos.\n\n1. Para ver los productos.\n2. Para filtrarlos por categoría.\n3. Para filtrarlos por precio,\n4. Para crear un nuevo producto.\n5. Para eliminar un producto de la lista.\n6. Para modificar el stock de un producto\n\n Para salir, ingrese 0");

        switch (opcion) {
            case "0":
                mensajeDeDespedida();
                break;
            case "1":
                verProductos();
                break;
            case "2":
                filtrarPorCategoria();
                break;
            case "3":
                filtrarPorPrecio();
                break;
            case "4":
                crearNuevoProducto();
                break;
            case "5":
                eliminarProducto();
                break;
            case "6":
                modificarStock();
                break;
            default:
                mensajeDeError(opcion);
                break;
        }
    } while (opcion !== "0")
}

main();