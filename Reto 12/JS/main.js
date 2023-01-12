// Creamos el array que contendrá los números aleatorios creados por función.
let array =[];
// Creamos también el array que contendrá los números acabados en el número indicado por el usuario que estén dentro del primer array.
let arrayFinal= [];
//Creamos el array que enlaza con el div del html.
let divweb = document.getElementById('resultado');
//Creamos las variables que serán accesibles para todas las funciones.
let lastNum = 0;
let lengthArray = 0;
//Crearemos la función que creará tantos números aleatorios cómo indique el usuario y se guardarán en el array. Los números random se generarán mediante un bucle for y los números entre los que estarán esos aleatorios serán números fijos está vez.
function randomize(){
    let num = 0;
    lengthArray = prompt('¿Cuántos números quieres que tenga la array?');
    for (i = 0; i < lengthArray; i++) {
        num = Math.ceil(Math.random() * ((300+1) - 1));
        array.push(num);
    }   
}
//Creamos la función que preguntará al usuario el número en el que tienen que acabar los números dentro del primer array para que se pasen al último array, y comprobaremos mediante un bucle while que el número es válido (es decir, que sea un numero entero positivo que esté entre 0 y 9).
function ultimoNumero() {
    lastNum = parseInt(prompt("¿En que número quieres que acaben los que se mostrarán?"));
    while(lastNum < 0 || lastNum > 9) {
        console.log("¡Valor no permitido!");
        lastNum = parseInt(prompt("Por favor escoje un número entero positivo entre el 0 y el 9"));
    }
}

//Por último creamos la funcion que comprobará mediante un bucle for cada número dentro del primer array para saber si es un número que acabe con la cifra indicada por el usuario con una sentencia if, y en caso afirmativo lo añadirá al ultimo array.
function comparation(number){
    for (i = 0; i < array.length; i++) {
        let comprobacion = array[i].toString();
        let comprobation = comprobacion.endsWith(number);
        if (comprobation === true){
            arrayFinal.push(comprobacion);
        }
    }
}
//Llamamos a las funciones para que se ejecuten.
randomize();
ultimoNumero();
comparation(lastNum);
//Mandamos a imprimir por consola los valores del array para que podamos comprobar que los números añadidos en la última array estaban en la primera.
console.log ('Estos són los valores aleatorios colocados en la array')
console.log (array);
//Creamos una sentencia if para hacer más personalizado el mensaje a imprimir en el caso de que no se haya generado ningún número que acabe con la cifra indicada por el usuario, o que sólo se haya encontrado uno. En cualquiera de los casos se mostrará un mensaje por consola y en el html indicando los números guardados en el último array que serán aquellos que finalicen con el número deseado por el usuario.
if (arrayFinal.length == 0){
    console.log ('No se ha generado ningún número en el array que acabe en ' +lastNum);
    divweb.innerHTML = 'No se ha generado ningún número en el array que acabe en ' +lastNum;
}else if (arrayFinal.length == 1){
    console.log ('El único número encontrado en el array que finalice en ' +lastNum +' es: ' +arrayFinal.join(', '));
    divweb.innerHTML = 'El único número encontrado en el array que finalice en ' +lastNum +' es: ' +arrayFinal.join();
}else{
    console.log ('De los ' +lengthArray +' números creados aleatoriamente dentro del array, los que acaban en ' +lastNum +' son: ' +arrayFinal.join(', '));
    divweb.innerHTML = 'De los ' +lengthArray +' números creados aleatoriamente dentro del array, los que acaban en ' +lastNum +' son: ' +arrayFinal.join(', ');
}
    



