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

alert ("Cuotas sin interes");

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
}