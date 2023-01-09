// Establecemos la constante contraseña.
var pass = 'Hol@334';
//Añadimos la variable intento que será la que irá marcando al programa cuantos intentos lleva el usuario.
var intento = 0;
//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById('resultado');
//Creamos la variable que almacenará la contraseña que escribirá el usuario en esta Prompt.
//var input = prompt('Introduce la contraseña');
//Tras el intento del usuario de acertar la contraseña insertamos la orden que le sumará 1 a la variable "intento".
intento++;
//Como queremos que el usuario sólo tenga 3 intentos creamos la variable "oportunidades" que llevará la cuenta de los intentos restantes. 
var oportunidades = 3 - intento;
//Creamos un bucle que mientras el usuario haya echo menos de 3 intentos y además la contraseña puesta por el usuario no coincida con la variable "pass" mandara una alerta de que la contraseña es incorrecta mostrando los intentos restantes, te volverá a pedir la contraseña y aumentara el contador de "intento" en uno.
while (intento < 3 && pass != input){
    alert('¡Contraseña incorrecta! intentos restantes: ' + oportunidades)
    oportunidades= oportunidades - intento;
    //var input = prompt('Intentelo de nuevo');
    intento++;    
}

//Creamos una condición if para saber si el bucle while se ha finalizado por exceder los intentos o porque el usuario ha acertado la contraseña, para ello comparamos que el usuario haya echo 3 o menos intentos y que la contraseña se ha acertado, si se cumple querrá decir que el usuario ha acertado la contraseña, y se mostrará por consola y por pantalla
if (intento <= 3 && input == pass){
    console.log ('¡Enhorabuena! ¡Contraseña correcta!');
    divweb.innerHTML = '¡Enhorabuena! ¡Contraseña correcta!';
}// En el caso de que no se cumpla quiere decir que el bucle while finalizó porque el usuario se equivocó 3 veces al poner la contraseña y se mostrará en pantalla y consola que se le han acabado los intentos
else{
    console.log ('Ha excedido los intentos, acceso denegado.');
    divweb.innerHTML = 'Ha excedido los intentos, acceso denegado.';
    
};
    



//Mandamos el cálculo mátematico al div de la web.
