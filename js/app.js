// comida para puesto


const comidas = [
    {id: 1, nombre: "Hamburguesa", precio: 1292, peso:1000, img: "hamburguesa.jpg"},
    {id: 2, nombre: "Pizza", precio : 1300, peso: 700, img: "pizza.jpg"},
    {id: 3, nombre: "Papas fritas", precio: 1100, img: "papas-fritas.jpg"},

];


const h3 = document.getElementById('usuario');

const contenedor = document.getElementById('contenedor');

let ingreso = prompt('Ingresa tu nombre de usuario');

const input = document.getElementById('ingreso');
input.value = 'ingrese';


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