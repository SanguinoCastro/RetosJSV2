//Primero creamos los 2 arrays vacíos que recibirán los valores mediante las function.
var array1 = [];
var array2 = [];
//Creamos las variable a las que necesitamos que accedan varias funciones.
let max = 0;
let min = 0;

//Creamos la primera función que tendrá la variable 'num' dónde se irán guardando los números random antes de subirse al array, pedirá al usuario cuántos números quiere que haya en las array y etre que dos valores han de estar los aleatorios creados, luego los creará mediante un bucle for que se repetirá hasta que el contador 'i' sea igual al valor puesto por el usuario en la variable 'lengthArray' y los subirá al array que le indiquemos a la función cuando la llamemos más adelante (en este caso a la array1) 
function randomize(array){
    let num = 0;
    let lengthArray = Number(prompt('¿Cuántos números quieres que tengan las array?'));
    min = Number(prompt('¿Desde que número deseas que seán los aleatorios?'));
    max = Number(prompt('¿Y hasta que número?'));
    for (i = 0; i < lengthArray; i++) {
        num = Math.ceil(Math.random() * ((max + 1) - min));
        array.push(num);
    }   
}

//Creamos una pequeña función que copie en una variable cada valor del array que indiquemos (en este caso a array1) y devolverá el valor de la variable 'copy'.
function copia(array) {
    let copy = array.slice(0);
    return copy;
}

//Creamos la función que creará una array nueva y le subirá tantos valores aleatorios como tenga la array que le indiquemos a la función y devolverá la nueva array. 
function randomize2(array) {
    let random;
    let randomArray = [];
    for (i = 0; i < array.length; i++) {
        random = Math.round(Math.random() * ((max + 1) - min));
        randomArray.push(random);
    }
    return randomArray;
}

//Para finalizar crearemos la función que cogerá el valor de dos array que le indiquemos (en este caso las array1 y array2) y multiplicará cada una de las posiciones de la primera array con las posiciones de la segunda. Guardará en una tercera array, en el mismo orden, el resultado de estas.
function multi(list1, list2) {
    let arrayMulti = [];
    let multi = 0;
    for (i = 0; i < array1.length; i++) {
        multi = list1[i] * list2[i];
        arrayMulti.push(multi);
    }
    return arrayMulti;
}

//Empezamos llamando la primera función 'randomize' para dar valores a la 'array1'
randomize(array1);
//Imprimimos por consola los valores generados aleatoriamente en la 'array1'
console.log('El primer array tiene los siguientes valores:');
console.log(array1);
//Usamos la función 'copia' para darle a 'array2' los mismos valores que tiene array1
array2 = copia(array1);
//E indicamos por consola que tras el proceso anterior 'array2' tiene ahora los mismos valores que 'array1'
console.log('Tras la copia del primer array, array2 tiene los siguientes valores:');
console.log(array2)
//Tras eso usamos 'randomize2' sobre 'array2' para cambiar los valores por otros valores aleatorios y la función usará la 'array1' para que le indique cuántos números tiene que crear. 
array2 = randomize2(array1);
//Y mostramos por consola los nuevos valores que ha obtenido el 'array2'
console.log('Tras randomizar el array 2 queda así:')
console.log(array2)
//Por último mostramos en consola el resultado de usar la función 'multi' con el 'array1' y el 'array2' como valores.
console.log('Los valores del array que tiene los resultados de las multiplicaciones de los valores del array 1 y del array 2 son los siguientes:')
console.log(multi(array1, array2));