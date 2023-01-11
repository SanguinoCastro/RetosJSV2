//Creamos la función que creará los números aleatorios.

function random (minimo, maximo){
    minimo = Math.ceil (min);
    maximo = Math.floor (max + 1);
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
// Pedimos al usuario entre que dos números quiere que se creen los aleatorios y cuántos aleatorios quiere que se creen.
let min = Number(prompt("Introduce desde que número quieres que se cree el aleatorio"));
let max = Number(prompt("Introduce hasta que número quieres que se cree el aleatorio"));
let numbers = Number(prompt ("¿Cuántos números aleatorios quieres que se creen?"))
//Crearemos una array vacía dónde insertaremos los números aleatorios que se irán creando en el bucle for para luego poder mostrarlos de una manera mas ordenada.
let aleatorios = []

//Creamos un bucle for que irá creando tantos números aleatorios como hayamos pedido y los irá añadiendo al array vacío creado antes.
for (i = 0; i < numbers; i++){
    aleatorio = random(min, max)
    aleatorios.push(aleatorio);
}
//Una vez generados los números aleatorios sólo hace falta mostrarlos imprimiendo el array e indicando cómo queremos que se separen éstos.
console.log(aleatorios.join(", "));
divweb.innerHTML = aleatorios.join(", ");