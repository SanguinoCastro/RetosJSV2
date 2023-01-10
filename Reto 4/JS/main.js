//Creamos la función que nos calculará los factoriales que deseemos.
function fact(number) {
    for (i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
    //Esta función multiplica el valor i con el variable "factorial" continuamente hasta que ésta valga tanto cómo el número indicado por el usuario, de esta forma nos aseguramos de que se múltipliquen todos los números anteriores al número indicado obteniendo así el factorial.
}
//Pedimos al usuario el número del cuál se desea encontrar el factorial y lo almacenamos en variable.
var num = Number(prompt("¿De que número quieres saber su factorial?"));
//Establecemos el variable "factorial" a 1 ya que és el variable que se irá múltiplicando con el "i" del bucle for, y si fuese 0 el resultado siempre seria 0.
var factorial = 1;
//Añadimos también el variable de conexión con el html.
let divweb = document.getElementById('resultado');
//Mandamos orden de impresión en consola del resultado del proceso de la función con el valor dado por el usuario.
console.log(fact(num))
//Y mandamos orden de impresión en el div del html del valor final del variable factorial, ya que copiasemos la petición console.log repetiría el proceso y el resultado saldria erroneo.
divweb.innerHTML ='El factorial de ' +num +' es: ' +factorial;

//Como nota curiosa/informativa la consola calculara el factorial hasta el número 170.99^ a partir del 171 el resultado lo marca como "Infinity"