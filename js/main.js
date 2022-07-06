//x Crear estructura básica HTML
// X Traerme los elementos que necesito de HTML a JS
//Escuchar evento en botón
//Hacer función de numero random
//Hacer funcion manejadora del evento
//Hacer función condicional según el value del input y el random
//Hacer función contador de prueba


'use strict';

const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const clueParagraph = document.querySelector('.js_clue');
const tryParagraph = document.querySelector('.js_try');




function handleClick(ev){
    ev.preventDefault();
    console.log("Funciona");

}


btn.addEventListener("click", handleClick);