// Creamos la función que convertirá el número dado por el usuario en una String y indicará cuantás cifras tiene
function cifras(number) {
    let nCifras = number.toString().length;
    return nCifras;
}
// Pedimos al usuario un número entero positivo para calcular cuántas cifras tiene y lo almacenamos en variable.
let num = prompt('Por favor inserta un número entero positivo para contar cuántas cifras tiene.');
// Creamos la variable que enlaza con el documento html.
let divweb = document.getElementById('resultado');

//Creamos un bucle while para confirmar que el valor dado por el usuario sea mayor que cero para asegurarnos de que es positivo, y que no tiene ni puntos ni comas, para descartar los decimales, en el caso de que uno de esos tres casos se cumpla, mandará una alerta de número incorrecto y volverá a pedir un nuevo número.
while (num < 0 || num.includes('.') || num.includes(',')){
    alert('El número indicado no es correcto');
    num = prompt('Por favor inserta un número entero positivo para contar cuántas cifras tiene.');
}
//una vez asegurados que el número dentro de la variable 'num' es un numero entero y positivo mandaremos a imprimir por consola y por web el resultado de la función creada al principio.
console.log ('El número ' +num +' tiene un total de ' +cifras(num) +' cifras');
divweb.innerHTML = 'El número ' +num +' tiene un total de ' +cifras(num) +' cifras';

    



