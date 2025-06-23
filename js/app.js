/*
Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. 
*/

const a = 1;
const b = 2;

function somma(a, b) {
    console.log(a + b);
}

const sommaAnonima = function (a, b){
    console.log( a + b);
}

const sommaArrow = (a,b)=> console.log(a+b);

