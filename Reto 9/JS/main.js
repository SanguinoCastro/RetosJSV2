//Creamos la array vacía dónde se irán añadiendo los X números aleatorios creados por la función 'input'.
let array = [];
// Variable de enlace con el div del html.
let divweb = document.getElementById('resultado');

// Creamos la primera función que pedirá al usuario cuántos números aleatorios quiere meter en la array y luego mediante un bucle for que se repetirá tantas veces como el número indicado por el usuario, se crearán números aleatorios entre 9 y 0 (ya que el  comando Math.random crea randoms incluyendo el valor mínimo pero nunca llegando al valor máximo indicado en este caso el 10)y los añadirá al array, para finalizar devolviendo el valor del array. 
function input (){
    let numbers = prompt('¿Cuántos números aleatorios quieres que tenga la array?');
    for (i=1; i <= numbers ; i++){
        array.push(parseInt(Math.random()*(10-0)));
    }
    return array;
}

// Luego creamos la segunda función que sumará cada uno de los valores del array y lo añadirá a una variable interna llamada 'suma' y luego mandará primero a imprimir en consola cada uno de los números aleatorios añadidos al array con su índice y seguidamente mandará a imprimir por consola y html el resultado de la suma de todos.
function suma (){
   let suma= 0;
    array.forEach(numero =>{
        suma= suma + numero;
   });
    console.log (array);
    console.log ('El resultado de la suma de todos los números del array és: ' +suma);
    divweb.innerHTML = 'El resultado de la suma de todos los números del array és: ' +suma;
}
//Por último llamamos a las dos funciones, primero a la función input para que llene la array y finalmente la función suma para que haga el cálculo y muestre los valores del array y el resultado de la suma.
input();
suma();

//Nota: El orden en que se creen las funciones no afecta a la funcionalidad final, ya que lo importante es el orden en el que se llamen.

    