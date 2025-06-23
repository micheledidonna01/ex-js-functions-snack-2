/* Snack 1 */


function somma(a, b) {
    console.log(a + b);
}
somma(1, 2);

const sommaAnonima = function (a, b){
    console.log( a + b);
}
sommaAnonima(3, 4);

const sommaArrow = (a,b)=> console.log(a+b);
sommaArrow(5, 6);


/* Snack 2 */

const numeroQuadrato = (a) => console.log(a * a);
numeroQuadrato(2);