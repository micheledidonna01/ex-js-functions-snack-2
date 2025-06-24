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

/* Snack 7 */
function eseguiEferma(callback, time, timeStop){

    const start = setInterval(() => callback && callback(), time);
    const stop = setTimeout(() => {
        clearInterval(start);
        console.log(`timer fermato dopo ${timeStop} secondi` );
    }, timeStop)
    
}

eseguiEferma(()=> console.log("Timer in esecuzione"), 1000, 5000);

/* Snack 8 */
function timerDown(number){
    const countDown = setInterval(()=> {
        number--;
        console.log(number);
        if(number === 0) {
            console.log("Tempo scaduto!");
            clearInterval(countDown);
        }
    }, 1000);

}

timerDown(5);

/* Snack 9 */
function sequenzaOperazioni(operations, time, a, b){

    operations.forEach((o, i)=> {
            
            setTimeout(()=>{
                const result = o(a, b);    
                console.log("operazione " + (i + 1) + " = " + result);
            }, i * time)
    })


}

const operazioni = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
];

const timer = 2000;

sequenzaOperazioni(operazioni, timer, 10, 2)






