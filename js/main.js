//x Crear estructura básica HTML
// X Traerme los elementos que necesito de HTML a JS
// x Escuchar evento en botón
// X Hacer función de numero random
//X Hacer funcion manejadora del evento
//X Hacer función condicional según el value del input y el random
// X Hacer función contador de prueba
//Publicar


'use strict';

//QUERY SELECTOR
const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const clueParagraph = document.querySelector('.js_clue');
const tryParagraph = document.querySelector('.js_try');

//VARIABLES GLOBALES
let count = 0;
let random = getRandomNumber(100);

//FUNCIONES
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max);
    
}; 



function compare(){
    const inputValue = parseInt(input.value);
    
    
    console.log("Mi número aleatorio es" + " " + random);

    if( inputValue === random){
        clueParagraph.innerHTML = "Has ganado campeona!!!";
        clueParagraph.classList.add("winner");
    }
    else if( inputValue > 100){
        clueParagraph.innerHTML = "Tu número debe estar entre 1-100";
     }

    else if (inputValue <= 0){
        clueParagraph.innerHTML = "Tu número debe estar entre 1-100";
    }
    else if (inputValue > random){
        clueParagraph.innerHTML = " PISTA! Tú número es demasiado alto";
    }
    else if (inputValue < random){
        clueParagraph.innerHTML = "PISTA! Tu número es demasiado bajo";
    }
    
};


btn.onclick = function () {
    count++;
    tryParagraph.innerHTML = "Número de intentos"+ " " + count;
};

//FUNCION MANEJADORA DE EVENTO
function handleClick(ev){
    ev.preventDefault();
    compare();
}


btn.addEventListener("click", handleClick);