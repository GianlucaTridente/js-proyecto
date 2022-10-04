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
crearCard()


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

/*     if(Valor == "sessionStorage"){
        sessionStorage.setItem("user", JSON.stringify(user))
        h3.innerText = "Bienvenido " + user.usuario+ ", estos son nuestros productos";
    } */


    Valor == "sessionStorage" && sessionStorage.setItem("user", JSON.stringify(user)); h3.innerText = "Bienvenido " + user.usuario + ", estos son nuestros productos";


/*     if(Valor == "localStorage"){
        localStorage.setItem("user", JSON.stringify(user))
        h3.innerText = "Bienvenido " + user.usuario + ", estos son nuestros productos";
    } */

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

/* btn.addEventListener('click',(e)=>{
    e.preventDefault()
  if(checkbox.checked){
    guardar('localStorage');
  }  else{
    guardar('sessionStorage');  
  }
}) */


btn.addEventListener('click',(e)=>{
    e.preventDefault()
  checkbox.checked ? guardar('localStorage') : guardar('sessionStorage');
let condicion = validacionRegistro();
if(condicion){
      Swal.fire({
    icon: 'success',
    title: 'Se ha registrado correctamente',
  })
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



const DateTime = luxon.DateTime;

let dt = DateTime.now();
console.log(dt);
console.log(dt.year);
console.log(dt.month);
console.log(dt.day);

let dateObj = {month:"long", day: "numeric", year:"numeric"}

const hora = document.querySelector(".hora");



dt.setLocale("es").toLocaleString(dateObj)
hora.innerText = `${dt.setLocale('es').toLocaleString(dateObj)}`;


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
    console.log(existe);
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

