// comida para puesto



const teclados = [
    {id: 1, nombre: "G213", precio: 9390, peso:"600g", img: "Logitech G213.jpg"},
    {id: 2, nombre: "G413", precio : 16499, peso: "700g", img: "Logitech G413.jpg"},
    {id: 3, nombre: "K380", precio: 6990, peso: "300g", img: "Logitech K380.jpg"},

];

const botonBuscar = document.querySelector('#btn-buscar');
const busqueda = document.createElement('div');
const h3 = document.getElementById('usuario');
const contenedor = document.getElementById('contenedor');


const ul = document.getElementById('lista');

function crearCard(){
for (const servicio of teclados) {
    let li = document.createElement('li');

    li.innerHTML += `
    <div class= "card">
        <h3>${servicio.nombre}</h3>
        <p>precio: $${servicio.precio}</p>
        <p>peso:${servicio.peso}</p>
        <img src="./img/${servicio.img}" alt="comida">
        <button class="btnCarrito fa-solid fa-cart-shopping"" id="btn-agregar${servicio.id}"></button>
    </div>
    `
    ul.append(li);
    
}
agregarFUncionAlBoton()
}



//BUSCADOR

for (const teclado of teclados) {
    teclado.nombre;
}

botonBuscar.addEventListener ('click', (e)=>{
    e.preventDefault();  
    const input = document.getElementById('ingreso').value.toUpperCase();

    function buscadorNombreTeclado(arr, teclado){
        let encontrado = teclados.find(el => el.nombre == input);

        Swal.fire({
        icon: 'success',
        title: 'SE ENCUENTRA SU PRODUCTO DISPONIBLE',
      })
    
    return encontrado;
    }

encontrado = buscadorNombreTeclado(teclados,input);
Swal.fire("Se encuentra disponible: "+ encontrado.nombre);
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
    teclados.forEach(el=>{
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
        <div class= "card-carrito">
            <h3>${prod.nombre}</h3>
            <h3>Cantidad: ${prod.cantidad}</h3>
            <p>precio: $${prod.precio*prod.cantidad}</p>
            <p>peso:${prod.peso}</p>
            <img src="./img/${prod.img}" alt="comida">
            <button class="btnCarrito fa-solid fa-trash" id="btn-borrar${prod.id}"></button>
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
            resolve(teclados)
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


//finalizacion


const botonFinalizar = document.getElementById('boton-finalizar');

botonFinalizar.addEventListener('click', ()=>{
    Swal.fire({
        title: 'Compra en proceso',
        text: 'Recuerde registrarse ya que le mandaremos la informacion para continuar por ahi',
      })
      carrito = [];
})

