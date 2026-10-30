import { caracteristicas } from "./datos.js";

import { mostrarCaracteristicas } from "./interfaz.js";

const botonSaludo = document.querySelector("#boton-saludo");

const mensaje = document.querySelector("#mensaje");

botonSaludo.addEventListener("click", function() {

    mensaje.textContent = "¡El botón funciona correctamente!";

});

botonSaludo.addEventListener("click", function() {

    console.log("Se ha pulsado el botón.");

});


const botonInfo = document.querySelector("#boton-info");

const informacion = document.querySelector("#informacion");

botonInfo.addEventListener("click", function() {

    informacion.classList.toggle("oculto");

    if (informacion.classList.contains("oculto")) {

        botonInfo.textContent = "Mostrar información";
        botonInfo.setAttribute("aria-expanded", "false");

    } else {

        botonInfo.textContent = "Ocultar información";
        botonInfo.setAttribute("aria-expanded", "true");

    }

});


const lista = document.querySelector("#lista-caracteristicas");

const mensajeVacio = document.querySelector("#sin-resultados");

const contador = document.querySelector("#contador");

const campoBusqueda = document.querySelector("#busqueda");

mostrarCaracteristicas(caracteristicas, lista, mensajeVacio, contador);


campoBusqueda.addEventListener("input", function() {

    const texto = campoBusqueda.value.toLowerCase();

    const resultados = caracteristicas.filter(function(caracteristica) {

        return caracteristica.nombre.toLowerCase().includes(texto) ||
               caracteristica.descripcion.toLowerCase().includes(texto);

    });

    mostrarCaracteristicas(resultados, lista, mensajeVacio, contador);

});