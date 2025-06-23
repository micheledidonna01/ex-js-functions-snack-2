/* Snack 1 */


function somma(a, b) {
    console.log(a + b);
}
somma(1, 2);

const sommaAnonima = function (a, b) {
    console.log(a + b);
}
sommaAnonima(3, 4);

const sommaArrow = (a, b) => console.log(a + b);
sommaArrow(5, 6);


/* Snack 2 */

const numeroQuadrato = (a) => console.log(a * a);
numeroQuadrato(2);

/* Snack 3 */
const divisione = (a, b) => a / b;
const sottrazione = (a, b) => a - b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(4, 2, divisione));
console.log(eseguiOperazione(10, 1, sottrazione));

/* Snack 4 */

function creaTimer(timer){
    const timerOut = setTimeout(() => console.log("Tempo scaduto!"), timer) ;
}

creaTimer(1000);
