
//Creamos las funciones que haran los procesos deseados

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
let divweb = document.getElementById('resultado');
var figure = prompt("¿De cuál de las siguientes figuras deseas saber el area? 1) Círculo 2) Triángulo 3) Cuadrado")

switch (figure){
    case "1":
    case "Círculo":
    case "Circulo":
    case "círculo":
    case "círculo":
        var radio = Number(prompt("¿Cual és el radio del Círculo?"));
        console.log ("El area del círculo és: " + circulo(radio));
        divweb.innerHTML = "El area del círculo és: " + circulo(radio);
    break;
    case "2":
    case "Triángulo":
    case "Triangulo":
    case "triángulo":
    case "triangulo":
        var base = Number(prompt("¿Cual és la base del Triángulo?"));
        var altura = Number(prompt("¿Cual és la altura del Triángulo?"));
        console.log ("El area del triángulo és: " + triangulo(base,altura));
        divweb.innerHTML = "El area del triángulo és: " + triangulo(base,altura);
    break;
    case "3":
    case "Cuadrado":
    case "cuadrado":
        var lado = Number(prompt("¿Cual és lado del Cuadrado?"));
        console.log ("El area del cuadrado és: " + cuadrado(lado));
        divweb.innerHTML = "El area del cuadrado és: " + cuadrado(lado);
    break;
    default:
        alert("¡Valor añadido erróneo!")
    break
}