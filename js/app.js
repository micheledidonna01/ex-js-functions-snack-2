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
function creaTimer(timer, callback) {
    const timerOut = setTimeout(() => {
        callback && callback();
    }, timer);
}
creaTimer(3000, () => console.log("Tempo scaduto con callback!"));


/* Snack 5 */

function stampaOgniSecondo(callback) {
    const ogniSecondo = setInterval(() => {
        callback && callback()
    }, 1000);
    const stop = setTimeout(() => clearInterval(ogniSecondo), 5000);
}
stampaOgniSecondo(() => console.log("Ciao"));

/* Snack 6 */
function creaContatoreAutomatico(timer, stopTimer) {
    let counter = 0;
    return function incrementa(){
        
        const interval = setInterval(()=> {
            counter++;
            console.log(counter);
            
        }, timer);

        const stop = setTimeout(() => {
            clearInterval(interval);
            console.log("Contatore fermato dopo 5 secondi");
        }, stopTimer);
        counter === 5 && clearInterval(interval)
    }
    
}

const conta = creaContatoreAutomatico(1000, 5000);
conta();
