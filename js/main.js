//x Crear estructura básica HTML
// X Traerme los elementos que necesito de HTML a JS
// x Escuchar evento en botón
// X Hacer función de numero random
//X Hacer funcion manejadora del evento
//X Hacer función condicional según el value del input y el random
// X Hacer función contador de prueba
//X Publicar


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

function writeClue(message){
    clueParagraph.innerHTML= message;
}

function giveFeedback(inputValue){

    if(inputValue === '' || isNaN(inputValue)){
        writeClue("Error: tienes que escribir un número");
    }

    else if( inputValue === random){
        writeClue("Has ganado campeona!!!");
        clueParagraph.classList.add("winner");
    }
    else if( inputValue > 100){
        writeClue("Tu número debe estar entre 1-100");
     }

    else if (inputValue <= 0){
        writeClue("Tu número debe estar entre 1-100");
    }
    else if (inputValue > random){
        writeClue(" PISTA! Tú número es demasiado alto");
    }
    else if (inputValue < random){
        writeClue( "PISTA! Tu número es demasiado bajo");
    }
};

function compare(){
    const inputValue = parseInt(input.value);
    console.log("Mi número aleatorio es" + " " + random);
    
    giveFeedback(inputValue);
};


function countClick(ev) {
    count++;
    tryParagraph.innerHTML = "Número de intentos"+ " " + count;
};

//FUNCION MANEJADORA DE EVENTO
function handleClick(ev){
    ev.preventDefault();
    compare();
    countClick();
}


btn.addEventListener("click", handleClick);