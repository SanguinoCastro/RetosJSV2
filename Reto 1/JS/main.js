
//Creamos las funciones que haran los procesos deseados.

function circulo (radio){
    let circArea = (radio * 2)*Math.PI;
    return circArea;
}

function triangulo (base, altura){
    let triArea = (base*altura)/2;
    return triArea;
}

function cuadrado (lado){
    let cuArea = lado * lado;
    return cuArea;
}
// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
// Pedimos al usuario de que figura quiere calcular el área.
let figure = prompt("¿De cuál de las siguientes figuras deseas saber el area? 1) Círculo 2) Triángulo 3) Cuadrado")

//Creamos un bucle while que nos compruebe que el valor añadido es uno de los previstos en caso contrario enviará una alerta diciendo que no es un valor correcto y volverá a pedir la figura, si coincide pasamos al switch.
while (figure != 1 & figure != "Círculo" & figure != "Circulo" & figure != "círculo" & figure != "circulo" & figure != 2 & figure != "Triángulo" & figure != "Triangulo" & figure != "triángulo" & figure != "triangulo" & figure != 3 & figure != "Cuadrado" & figure != "cuadrado"){
    alert("¡Valor añadido erróneo! inserte un valor válido.")
    figure = prompt("¿De cuál de las siguientes figuras deseas saber el area? 1) Círculo 2) Triángulo 3) Cuadrado")   
}

//Creamos el switch que índica que debe hacer el programa dependiendo de la respuesta del usuario a la petición de la figura.
switch (figure){
    //Al colocar los case de esta forma seguida nos ahorra repetir instrucciónes si varias opciones deben responder de la misma forma.
    case "1":
    case "Círculo":
    case "Circulo":
    case "círculo":
    case "circulo":
        let radio = Number(prompt("¿Cual és el radio del Círculo?"));
        console.log ("El area del círculo és: " + circulo(radio));
        divweb.innerHTML = "El area del círculo és: " + circulo(radio);
    break;
    case "2":
    case "Triángulo":
    case "Triangulo":
    case "triángulo":
    case "triangulo":
        let base = Number(prompt("¿Cual és la base del Triángulo?"));
        let altura = Number(prompt("¿Cual és la altura del Triángulo?"));
        console.log ("El area del triángulo és: " + triangulo(base,altura));
        divweb.innerHTML = "El area del triángulo és: " + triangulo(base,altura);
    break;
    case "3":
    case "Cuadrado":
    case "cuadrado":
        let lado = Number(prompt("¿Cual és lado del Cuadrado?"));
        console.log ("El area del cuadrado és: " + cuadrado(lado));
        divweb.innerHTML = "El area del cuadrado és: " + cuadrado(lado);
    break;
}

//Como hemos colocado el bucle while antes del switch para asegurarnos que el valor que coloca el usuario es válido no hace falta indicar en el switch un default.