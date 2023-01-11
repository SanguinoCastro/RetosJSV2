//Creamos la Función que convertirá el número a binario.
function convertirBinario(numero){
    //Creamos dentro de la función 2 variables, binario que contendrá el array dónde se irán añadiendo los restos y finalizará teniendo el valor en binario y resto donde iremos haciendo las divisiones entre 2 y guardando el valor del resto que seguidamente subiremos al array.
    let binario = [];
    let resto = 0;
    do{
        //En estás ordenes pedimos que el valor de resto sea el resto del número que indica el usuario mediantre prompt dividido entre dos.
        resto = numero % 2;
        //el valor de resto lo suba al array "binario"
        binario.push(resto);
        //y dividiremos el número dado por el usuario entre 2 y redondearemos con el "Math.floor" para eliminar los decimales.
        numero = Math.floor(numero / 2)
    }//Aqui indicamos que mientras el resultado del número dividido entre 2 sea distinto a 1 el bucle no finalizará
    while (numero !=1);
        //una vez finalizado el bucle subiremos el último numero conseguido al array
        binario.push(numero);
        //invertiremos el orden de los números dentro del array
        binario = binario.reverse();       
        //y devolveremos el valor de binario.
        return binario;
}
//Crearemos el variable que contendrá el valor del número que pedimos al usuario.
let num = Number(prompt('Introduce el número a convertir'));
//creamos el variable "resultado" que llamará la función y almacenará su resultado.
let resultado = convertirBinario(num);
//Creamos el variable de enlace con el div del html.
let divweb = document.getElementById('resultado');

// y mandamos a imprimir por consola y por el div del html el resultado eliminando las comas que separan los valores del array.
console.log ('El número ' +num +' en binario es: ' +resultado.join(''));
divweb.innerHTML = 'El número ' +num +' en binario es: ' +resultado.join('');
