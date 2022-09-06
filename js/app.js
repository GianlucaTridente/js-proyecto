// comida para puesto


const hamburguesa = {nombre:"Hamburguesa",  precio: 1800, peso:500}
const productos = [];


function Producto (nombre, precio, peso){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.peso = peso;
}


const pizza = new Producto ('Pizza', 1000, 500);

let nombreComida = prompt("Ingresa el nombre de la comida");
let precioComida = prompt ("Ingresa el precio de la comida");
let pesoComida = prompt("Ingresa el peso de la comida");


const comidaNueva = new Producto (nombreComida, precioComida, pesoComida);

function CargarProductos (producto){
   return productos.push(producto);
}


CargarProductos(hamburguesa);
CargarProductos(pizza);
CargarProductos(comidaNueva);


for (const propiedad of productos){
    console.log(propiedad);
}

let siono = prompt("desea buscar un producto ponga: si, sino ponga : no")


if (siono == "si"){

    let buscar = prompt("Ingrese que comida quiere buscar");

    let encontrado = productos.some(el =>{
    return el.nombre == buscar;
    })
    if (encontrado == true){
    alert ("Se encuentra su comida disponible")
}else{
    alert("No esta disponible")
}
}

let cambio = prompt("Ingrese si o no dependiendo si desea sumarle una cantidad al precio de todoas las comidas"); 
if (cambio = "si"){
    let nuevoPrecio = parseInt(prompt("ingrese el nuevo precio"))
    const actualizarPrecios = productos.map(prod=>{
    return{
        nombre: prod.nombre,
        precio: prod.precio+nuevoPrecio,
    };
})
console.log(actualizarPrecios);
}