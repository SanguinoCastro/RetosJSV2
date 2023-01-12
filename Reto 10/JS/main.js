// Creamos las los variables que pedirán al usuario cuántos números primos quiere crear y el rango de números entre los que se creará el aleatorio.
let lengthArray = prompt('¿Cuántos números primos quieres que tenga la array?');
let min = Number(prompt('¿Desde que número deseas que seán los aleatorios?'));
let max = Number(prompt('¿Y hasta que número?'));
// Convertimos la respuesta del usuario a cuántos números quiere crear a un número entero para evitar errores por la introducción de decimales.
lenghtArray = parseInt(lengthArray);
// Creamos la array dónde se irán insertando los números primos.
let array = [];
//Creamos el resto de variables que necesitaremos, la variable que contendrá el número aleatorio creado por la función 'randomize', la variable que contendrá el valor boleano si el resultado es primo o no para que puedan acceder a ella várias funciones y la variable que representa el div del html.
let num = 0;
let primo = true;
let divweb = document.getElementById('resultado');

// Creamos la función que creará números aleatorios dentro del rango pedido por el cliente y devolverá el aleatorio.
function randomize(){
    num = Math.floor(Math.random() * ((max + 1) - min));
    return num;
}
//Seguidamente creamos la función que comprueba que el número aleatorio por una parte no sea ni 0 ni 1 para evitar que el programa lo detecte como primo, y despues comprobará si el número aleatorio es primo mediante un bucle for que comprobará el resto de la división del aleatorio entre 2 y el resto de números hasta llegar a uno antes de la cifra aleatoria, si el resto es 0 en alguna de esas divisiones la secuencia if del bucle for dará el valor boleano false al variable 'primo' (ya que significa que es divisible entre más números aparte de 1 y él mismo, por lo cuál no es primo), y devuelve el valor de primo.
function primos(valor){
    primo = true;
    if (valor == 0 || valor == 1){
        primo = false;
    }
    for (i = 2; i < valor; i++) {
        if (valor % i == 0) {
            primo = false;
        }
    }
    return primo;
    
}

//Por último creamos la función que llama a las anteriores, mediante un bucle while e irá obteniendo el número aleatorio de la función 'randomize' y la respuesta de si éste es primo dada por la función 'primos', si el valor es true subirá el número aleatorio al array, esto hasta que haya en la array tantos números primos como los pedidos por el usuario, una vez obtenidos todos, se crea una variable que guarde el mayor número almacenado en el array y después imprime por consola el valor del array (comando extra para hacer el proceso mas visible), y finalmente imprime por consola y por html el número mas alto del array.
function inputOutput(){
    while (array.length < lenghtArray) {
        primos(randomize());
        if (primo == true) {
            array.push(num);
        }
    }
    let mayor = Math.max(...array);
    console.log(array);
    console.log('El número mayor del array es: ' +mayor)
    divweb.innerHTML = 'El número mayor del array es: ' +mayor;
}

// Y para finalizar llamamos a la función inputOutput que ejecutará todos las otras funciones.
inputOutput();



   
 