// comida para puesto


const comidas = [
    {id: 1, nombre: "Hamburguesa", precio: 1292, peso:1000, img: "hamburguesa.jpg"},
    {id: 2, nombre: "Pizza", precio : 1300, peso: 700, img: "pizza.jpg"},
    {id: 3, nombre: "Papas fritas", precio: 1100, img: "papas-fritas.jpg"},

];


const botonBuscar = document.querySelector('#btn-buscar');
const busqueda = document.createElement('div');

const h2 = document.getElementById("h2");
h2.innerText= "Eventos";

const h3 = document.getElementById('usuario');

const contenedor = document.getElementById('contenedor');

let ingreso = prompt('Ingresa tu nombre de usuario');




h3.innerText = "Bienvenido " + ingreso + ", estos son nuestros productos";

const ul = document.getElementById('lista');


for (const servicio of comidas) {
    let li = document.createElement('li');

    li.innerHTML = `
    <div class= "card">
        <h3>${servicio.nombre}</h3>
        <p>precio: ${servicio.precio}</p>
        <p>peso: ${servicio.peso}</p>
        <img src="./img/${servicio.img}" alt="comida">
    </div>
    `
    ul.append(li);
}



for (const comidass of comidas) {
    comidass.nombre;
    console.log(comidas);
}

botonBuscar.addEventListener ('click', (e)=>{
    e.preventDefault();  
    const input = document.getElementById('ingreso').value;
    function buscadorNombreComida(arr, comidass){
        let encontrado = arr.find((el)=>{
            return el.nombre == comidass; 
        });
        return encontrado;
    
}

buscadorNombreComida()

const encontrado = buscadorNombreComida(comidas,input);

const divEncontrado = document.createElement('div');
divEncontrado.innerHTML = `
<div>
    <h2>Se encuentra ${encontrado.nombre}</h2>
</div>
`
busqueda.append(divEncontrado);
console.log(arr);
});





/* function filtrarComidas(arr, filtro){
   const filtrado = arr.filter ((el)=>{
    return el.nombre.includes(filtro);
   });
    return filtrado;
}


botonBuscar.addEventListener("click", ()=>{
    
    let resultado = filtrarComidas(comidas.nombre, input.value);
    console.log(resultado);
    body.append(busqueda);
})
 */


/* for (const comidass of comidas) {
        comidass.nombre;
    } */



/* botonBuscar.addEventListener ('click', (e)=>{
    e.preventDefault();   */



 /*    botonBuscar.addEventListener ('click', (e)=>{
        e.preventDefault();  
    function buscadorNombreComida(arr, comidass){
        let encontrado = arr.find((el)=>{
            return el.nombre == comidass; 
        });
        return encontrado;
    }
    buscadorNombreComida()
    
    const encontrado = buscadorNombreComida(comidas,input);
    
    const divEncontrado = document.createElement('div');
    divEncontrado.innerHTML = `
    <div>
        <h2>Se encuentra ${encontrado.nombre}</h2>
    </div>
    `
    busqueda.append(divEncontrado);
    });

function buscadorNombreComida(arr, comidass){
    let encontrado = arr.find((el)=>{
        return el.nombre == comidass; 
    });
    return encontrado;
}

const encontrado = buscadorNombreComida(comidas,input);

const divEncontrado = document.createElement('div');
divEncontrado.innerHTML = `
<div>
    <h2>Se encuentra ${encontrado.nombre}</h2>
</div>
`
busqueda.append(divEncontrado);
}); */





/* botonBuscar.addEventListener ('click', (e)=>{
    e.preventDefault();  
function buscadorNombreComida(arr, comidass){
    let encontrado = arr.find((el)=>{
        return el.nombre == comidass; 
    });
    return encontrado;
}
buscadorNombreComida()

const encontrado = buscadorNombreComida(comidas,input);

const divEncontrado = document.createElement('div');
divEncontrado.innerHTML = `
<div>
    <h2>Se encuentra ${encontrado.nombre}</h2>
</div>
`
busqueda.append(divEncontrado);
}); */




/* botonBuscar.addEventListener ('click', (e)=>{
    e.preventDefault(); 
    const input = document.getElementById('ingreso').value; 
function buscadorNombreComida(arr, comidass){
    let encontrado = arr.find((el)=>{
        return el.nombre == comidass; 
    });
    return encontrado;
}

const encontrado = buscadorNombreComida(comidas,input);

const divEncontrado = document.createElement('div');
divEncontrado.innerHTML = `
<div>
    <h2>Se encuentra ${encontrado.nombre}</h2>
</div>
`
busqueda.append(divEncontrado);
buscadorNombreComida()
});
 */



