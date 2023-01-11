function input(){
    for (let i = 1; i <= 10; i++) {
        array.push(prompt("Introduce el número " + i + " del array."));
    }
}
function output(){
    for (let i = 0; i < array.length; i++) {
        console.log('Se ha asignado el valor ' +array[i] +' a la posición ' + i + ' del array.');
        divweb.innerHTML = 'Se ha asignado el valor ' +array[i] +' a la posición ' + i + ' del array.' 
    }
}

let array = [];
let divweb = document.getElementById('resultado');
input()
output()