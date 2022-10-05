// comida para puesto



const comidas = [
    {id: 1, nombre: "HAMBURGUESA", precio: 1292, peso:1000, img: "hamburguesa.jpg"},
    {id: 2, nombre: "PIZZA", precio : 1300, peso: 700, img: "pizza.jpg"},
    {id: 3, nombre: "PAPAS FRITAS", precio: 1100, img: "papas-fritas.jpg"},

];

const botonBuscar = document.querySelector('#btn-buscar');
const busqueda = document.createElement('div');
const h3 = document.getElementById('usuario');
const contenedor = document.getElementById('contenedor');


const ul = document.getElementById('lista');

function crearCard(){
for (const servicio of comidas) {
    let li = document.createElement('li');

    li.innerHTML += `
    <div class= "card">
        <h3>${servicio.nombre}</h3>
        <p>precio: $${servicio.precio}</p>
        <p>peso:${servicio.peso}</p>
        <img src="./img/${servicio.img}" alt="comida">
        <button class="btnCarrito" id="btn-agregar${servicio.id}">Agregar</button>
    </div>
    `
    ul.append(li);
    
}
agregarFUncionAlBoton()
}



//BUSCADOR

for (const comida of comidas) {
    comida.nombre;
}

botonBuscar.addEventListener ('click', (e)=>{
    e.preventDefault();  
    const input = document.getElementById('ingreso').value.toUpperCase();
    function buscadorNombreComida(arr, comida){
        let encontrado = comidas.find(el => el.nombre == input);
        
    return encontrado;
    
}


const htmlEncontrado = buscadorNombreComida(comidas,input);

const divEncontrado = document.getElementById('aparecer');

divEncontrado.innerHTML = `
    <h2>Se encuentra ${htmlEncontrado.nombre.toLowerCase()}</h2>

`
divEncontrado.append();
});



//  REGISTRO

const btn = document.getElementById ("btnIngresar"), 
checkbox = document.getElementById("checkbox"),
email = document.getElementById("email"),
userRegis = document.getElementById("userRegis"),
password = document.getElementById("password")
listaInputs = document.querySelectorAll(".registinput")
repeatpassword = document.getElementById("repeatpassword");
btn.value = "Registrar";

function guardar (Valor){

let user = {username: email.value , password: password.value, usuario: userRegis.value, repetirCon: repeatpassword.value}


    Valor == "sessionStorage" && sessionStorage.setItem("user", JSON.stringify(user)); h3.innerText = "Bienvenido " + user.usuario + ", estos son nuestros productos";

    Valor == "localStorage" && localStorage.setItem("user", JSON.stringify(user)); h3.innerText = "Bienvenido " + user.usuario + ", estos son nuestros productos";

    return user;
}



function recuperarDatos(datos){
    if (datos){
        email.value = datos.username;
        userRegis.value  = datos.userRegis;
    }
}

recuperarDatos(JSON.parse(localStorage.getItem("user")));


const registrohide = document.querySelector(".registro")

btn.addEventListener('click',(e)=>{
    e.preventDefault()
  checkbox.checked ? guardar('localStorage') : guardar('sessionStorage');
let condicion = validacionRegistro();
if(condicion){
      Swal.fire({
    icon: 'success',
    title: 'Se ha registrado correctamente',
  })
  setTimeout(()=>{
    registrohide.classList.add('hide');
  },1000)
  

}
  


});


function validacionRegistro(){

    let condicion= true;

    if(userRegis.value.length <1 || userRegis.value.trim() == ""){
        mostrarMensajeError("userRegis", "Nombre no valido*");
        condicion = false;
    }

    if(password.value.length <5 || password.value.trim() == "" && repeatpassword.value !== password.value){
        mostrarMensajeError("password", "Contraseña no valido* Recuerda que debe tener mas de 4 digitos*");
        condicion = false;
    }

    if(email.value.length <1 || email.value.trim() == ""){
        mostrarMensajeError("email", "Email no valido*");
        condicion = false;
    }

    return condicion;
}


function mostrarMensajeError(claseInput, mensaje){
    let elementos = document.querySelector(`.${claseInput}`);
    elementos.lastElementChild.innerHTML = mensaje;
}



// CARRITO

const carritoDIv = document.querySelector("#carritoDiv");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



function agregarFUncionAlBoton(){
    comidas.forEach(el=>{
        document.querySelector(`#btn-agregar${el.id}`).addEventListener("click",()=>{
            agregarAlCarrito(el );
        })
    })
}

function agregarAlCarrito(el){
    
    let existe =  carrito.some(prod=> prod.id === el.id);
    if(existe === false){
        el.cantidad = 1;
        carrito.push(el);
    }else{
        let prodFInd = carrito.find(prod=> prod.id === el.id);
        prodFInd.cantidad++;
    }
    renderizarCarrito();
}

function renderizarCarrito(){
    carritoDIv.innerHTML = "";
    carrito.forEach(prod=>{
        carritoDIv.innerHTML += `
        <h3>SU PEDIDO:${prod.nombre}</h3>
        <div class= "card-carrito">
            <h3>${prod.nombre}</h3>
            <h3>Cantidad: ${prod.cantidad}</h3>
            <p>precio: $${prod.precio*prod.cantidad}</p>
            <p>peso:${prod.peso}</p>
            <img src="./img/${prod.img}" alt="comida">
            <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
        </div>
        `
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarProd();
}


function borrarProd(){
    carrito.forEach(el=>{
        document.querySelector(`#btn-borrar${el.id}`).addEventListener("click", ()=>{
            let indice = carrito.findIndex(e=>e.id === el.id);
            carrito.splice(indice,1);
            renderizarCarrito()
        })
    })
}

renderizarCarrito()


const contenedorCard = document.querySelector('.loader');

const pedirServicio = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(comidas)
        }, 2500);
    })
}

pedirServicio()
.then(respuesta=>{
    contenedorCard.textContent="";
    crearCard()
})



//Async await

const fetchRespuesta = async() => {
    const resultadoResponse = await fetch('./js/data.json');

    const data = await resultadoResponse.json();
   
    pedirServicio(data);
}

fetchRespuesta();