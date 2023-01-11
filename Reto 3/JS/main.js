//Creamos la función que indicará si el número es primo o no.
function numPrimo(number) {
    //Al usar un bucle for el código queda mas corto y limpio
    for (i = 2; i < number; i++){
        if (number % i === 0){
        primo = false;
        }
    }
    return primo;
}
// Creamos la variable que pedirá al usuario el número a comprobar.
let num = Number(prompt('¿Que número deseas comprobar si es primo?'));
//Creamos la variable booleana que establece de principio el valor primo a true.
let primo = true;
//Creamos la variable que se vincula con el documento html.
let divweb = document.getElementById('resultado');

//Indicamos que se imprima en consola y en el div de resultado la comprobación de si el número indicado es primo o no mostrandose "True" en caso de ser primo o "False" en caso de no serlo, tal y como pide el reto
console.log(numPrimo(num))
divweb.innerHTML = numPrimo(num);

   