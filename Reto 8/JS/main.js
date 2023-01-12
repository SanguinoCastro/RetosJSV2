// Creamos la array vacía que contendrá los 10  números que le insertará la función.
let array = [];
// Creamos la variable que hace de enlace con el html.
let divweb = document.getElementById('resultado');
//Creamos la primera función que nos pedirá los 10 números con un bucle for y los irá añadiendo al array antes creado.
function input(){
    for (let i = 1; i <= 10; i++) {
        array.push(prompt("Introduce el número " + i + " del array."));
    }
}
//Creamos la segunda función que recojerá el valor del array y mediante un bucle for irá imprimiendo en consola el valor y la posición de cada número dentro del array.
function output(){
    for (let i = 0; i < array.length; i++) {
        console.log('Se ha asignado el valor ' +array[i] +' a la posición ' + i + ' del array.');
        divweb.innerHTML = 'Se ha asignado el valor ' +array[i] +' a la posición ' + i + ' del array.' 
    }
}

//Y para finalizar llamamos a las 2 funciones para que se ejecuten.
input()
output()