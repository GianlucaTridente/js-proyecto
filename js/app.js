/* let juan = 0;
let zoe  = 0 ;
let agustin  = 0;

let finalizar = false;

while (finalizar != true) {
    let miVoto = prompt ("Escribe a quien te gustaria votar y para finalizar la votacion pon \"finalizar\"");

    if (miVoto === "juan"){
        ++juan;
        console.log("Juan obtuvo " + juan + " voto");
    }else{
        if (miVoto === "zoe"){
            ++zoe;
            console.log("zoe obtuvo " + zoe + " voto");
        }else{
            if (miVoto === "agustin") {
                ++agustin;
                console.log("Agustin obtuvo " + agustin + " voto");
            }else{
                if (miVoto === "finalizar") {
                    console.log("la votacion termino");
                    break;
                }
            }
        }
    }
}

console.log("Juan tuvo " + juan + " voto");
console.log("Zoe tuvo " + zoe + " voto");
console.log("Agustin tuvo " + agustin + " voto"); */


/* simulador interactivo */
/* calcular cuotas*/

/* alert ("Cuotas sin interes");

let precioDelProducto = prompt("Ingresa el precio del producto");

function coutas (num1, num2){
    let numero = num1 / num2;

    if (isNaN (num1) || isNaN(num2)){
        alert ("Los resultados deben ser numero");
    }
    else{
        alert ("Serian " + cantidadDeCuotas + " coutas de $" + numero );
    }
}

let cantidadDeCuotas = prompt("elegi si lo queres pagar en: \n 3 Cuotas \n 6 Cuotas \n 12 Cuotas");


switch (cantidadDeCuotas) {
    case "3":
        coutas (precioDelProducto , 3);
        break;
    case "6":
        coutas (precioDelProducto , 6);
        break;
    case "12":
        coutas (precioDelProducto , 12);
        break;
    default:
        alert ("No disponemos de otras opciones de cuotas")
        break;
}


alert ("Cuotas con interes");

function interes (numero1, numero2, numero3){
    let valorPorcentaje = ((numero1 * numero3) / 100) / numero2;
    let resultado = (numero1 / numero2) + valorPorcentaje;
    
    

    if (isNaN (numero1) || isNaN(numero2) || isNaN (numero3)){
        alert ("Los resultados deben ser numero");
    }
    else{
        alert ("Serian " + cantidadDeCuotasInteres + " coutas de $" + resultado );
    }
}

let precioDelProductoInteres = prompt("Ingresa el precio del producto");
let cantidadDeCuotasInteres = prompt("elegi si lo queres pagar en: \n 3 Cuotas \n 6 Cuotas \n 12 Cuotas");
let porcentaje = prompt ("Ingrese el porcentaje de interes");

switch (cantidadDeCuotasInteres) {
    case "3":
        interes (precioDelProductoInteres , 3, porcentaje);
        break;
    case "6":
        interes (precioDelProductoInteres , 6, porcentaje);
        break;
    case "12":
        interes (precioDelProductoInteres , 12, porcentaje);
        break;
    default:
        alert ("No disponemos de otras opciones de cuotas")
        break;
} */





/* objetos */



/* let nombre = "Gianluca";
let apellido = "Tridente";
let domicilio = "Obelisco";
let edad = "19"; */




/* objeto literal */



/* const personaje1 = {
    nombre: "Gianluca",
    apellido: "Tridente",
    domicilio: "Obelisco",
    edad: 19,
};

const personaje2 = {
    nombre: "Lionel",
    apellido: "Messi",
    domicilio: "Obelisco",
    edad: 35,
    hijos:{
        primero: "Mateo",
        segundo: "Ciro",
        tercero: "Thiago",
    }
};

let hijosDeMessi = personaje2.hijos;

console.log(personaje1 ["nombre"]); 
console.log(personaje2.edad);
console.log(hijosDeMessi.primero);
personaje2.nombre="cr7";
console.log(personaje2.nombre); */





/* funcion constructora */



/* function Auto (marca, anio, motor, modelo){
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
    this.marchar = () => {
        console.log("Estoy en marcha");
    };
    this.presentar = () =>{
        console.log("Soy un auto modelo " + this.modelo + " año: " + this.anio);
    };
} */

/* se usa this cuando hacemos referencia al objeto que vamos a crear y a la propiedad en cuestion, por ejem, marca = marca pero siempre del objeto auto */

/* const auto1 = new Auto("Audi", 2022, 3.9, "TT");
console.log(auto1);

const auto2 = new Auto("Ford", 1974, 3.9, "Falcon");
console.log(auto2);

auto1.marchar();
auto2.presentar();


console.log("marca" in auto1); */

/* el operador "in" lo que hace es preguntar si hace un atributo marca en el auto1*/

/* for (const atributos in auto1){
    console.log(atributos + " : " + auto1[atributos]);
}
 */
/* lo que hace este for es preguntar si hay atributos en el auto1 y los muestra */




// metodos de los objetos


/* let frase = "js se aprende practicando";
let fraseMayus = frase.toUpperCase(); */

/*  lo que hace toUpperCase es pasar todo a mayusculas */

/* console.log(fraseMayus);
console.log(frase.length);

let usuario = prompt("ingresa el usuario");
let usuarioGuardado = usuario.toLowerCase(); */

/* toLoweCase pasa todo a minusculas */

/* console.log(usuario);
console.log(usuarioGuardado); */




//clase constructora


/* class Auto {
    constructor (marca, anio, motor, modelo){
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
    this.marchar = () => {
        console.log("Estoy en marcha");
    };
    this.presentar = () =>{
        console.log("Soy un auto modelo " + this.modelo + " año: " + this.anio);
        };
    }
}
 */



//arrays

/* const array = [1,2,3,4,5,6,7,8,9,10,11];
console.log(array);

const mixto = [1,2,"hola", true];
console.log(mixto);

console.log(mixto[2]);

for (let i=0; i< mixto.length ; i++){
    console.log(mixto[i]);
} */


/* array push : agrega un elemento o mas*/


/* const arrayyy = [1,2,3,4,5];

arrayyy.push(6, "hola", false);
console.log(arrayyy); */


//array unshift : agrega tambien elementos pero al principio lo que hara que se corran los valores de lugar

/* const prueba = ["hola", 1, true];

prueba.unshift("como estas");

console.log(prueba); */


//array pop : elimina el elemento final (de a uno)

/* const prueba1 = [1,2,3,4,6];
prueba1.pop();
console.log(prueba1); */


//array shift : elimina el del principio

/* prueba1.shift();
console.log(prueba1); */


//array splice : permite eliminar uno o varios elementos de un array en cualquier posicion el primero es la posicion y el segundo cuantos quiero eliminar

/* const prueba2 = [1,2,3,4,5];
prueba2.splice(2,1);
console.log(prueba2); */


//array join : podemos generar un string con todos los elementos del array separados por el valor que pasamos por parametro

/* const prueba3 = [1,2,3,4,5,6];
console.log(prueba3.join("/")); */

//array concat : unir dos arrays

/* const prueba4 = ["hola","como estas"];
const prueba5 = ["bien","y vos"]
const unido = prueba4.concat(prueba5)
console.log(unido); */


//array indexof pregunta si existe, si no existe devuelve un -1, si exsite muestra la posicion del elemento --- includes : pregunta si esta ese elemento y tira un true o false dependiendo pero no la posicion

/* const prueba6 = [1,2,3,4,5];
console.log(prueba6.indexOf(6));
console.log(prueba6.indexOf(1));

console.log(prueba6.includes(2));
console.log(prueba6.includes(7)); */


//arrays de objetos -- poner objetos en arrays


/* const arroz = {nombre:"Gallo", peso:500, precio: 180}
const productos = [];


function Producto (nombre, precio, peso){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.peso = peso;

    this.sumarIva = () =>{
       return this.precio= this.precio * 1.21;
    }
}


const productoNuevo = new Producto ('Azucar', 195, 1000);
productoNuevo.sumarIva();
console.log(productoNuevo);


function CargarProductos (producto){
   return productos.push(producto);
}

CargarProductos(arroz);

console.log(productos); */


//for of para iterar sobre arrays de objetos

/* for (const propiedad of productos){
    console.log(propiedad);
} */



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

const comidaNueva = new Producto (nombreComida, precioComida, pesoComida)


function CargarProductos (producto){
   return productos.push(producto);
}

CargarProductos(hamburguesa);
CargarProductos(pizza);
CargarProductos(comidaNueva);


for (const propiedad of productos){
    console.log(propiedad);
}
