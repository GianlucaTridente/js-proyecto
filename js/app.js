let juan = 0;
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
console.log("Agustin tuvo " + agustin + " voto");


