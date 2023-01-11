//Creamos la función que hara el cambio de divisa a partir de los datos dados por el usuario e imprimirá el resultado del cambio.
function cambio(euros, moneda){
    //Primero establecemos el variable que utilizará la función para almacenar el cálculo del cambio de las divisas.
    let cambiando = '';
    //Segundo añadiremos un bucle while en la función para asegurarnos de que el dato introducido por el usuario en divisa sea válido y en caso de no serlo avise al usuario y le vuelva a pedir el valor.
    while (moneda !=1 & moneda !='Libra' & moneda !='libra' & moneda !='Libras' & moneda !='libras' & moneda !='£' & moneda !=2 & moneda !='Dolar' & moneda !='Dólar' & moneda !='dolar' & moneda !='dólar' & moneda !='Dolares' & moneda !='Dólares' & moneda !='dolares' & moneda !='dólares' & moneda !='$' & moneda !=3 & moneda !='Yen' & moneda !='yen' & moneda !='Yenes' & moneda !='yenes' & moneda !='¥'){
        alert('Moneda no reconocida');
        moneda = prompt('Por favor introduce una de las tres opciones: 1) Libras.  2) Dólares.  3) Yenes');
    }
    //Seguidamente hacemos un switch con los distintos valores válidos y según el valor se hará una múltiplicación con la divisa correspondiente e imprimirá en consola y en html el resultado del cambio correspondiente. Con esto tenemos ya la función finalizada.
    switch(moneda){
        case '1':
        case 'Libra':
        case 'libra':
        case 'Libras':
        case 'libras':
        case '£':
            cambiando = euros * libra;
            console.log('El cambio correspondiente a ' +euros +'€ en libras es: ' +cambiando +'£');
            divweb.innerHTML = 'El cambio correspondiente a ' +euros +'€ en libras es: ' +cambiando +'£';
        break;
        case '2':
        case 'Dólar':
        case 'dólar':
        case 'Dolar':
        case 'dolar':
        case 'Dólares':
        case 'dólares':
        case 'Dolares':
        case 'dolares':
        case '$':
            cambiando = euros * dolar;
            console.log('El cambio correspondiente a ' +euros +'€ en dólares es: ' +cambiando +'$');
            divweb.innerHTML = 'El cambio correspondiente a ' +euros +'€ en dólares es: ' +cambiando +'$';
        break;
        case '3':
        case 'Yen':
        case 'yen':
        case 'Yenes':
        case 'yenes':
        case '¥':
            cambiando = euros * yen;
            console.log('El cambio correspondiente a ' +euros +'€ en yenes es: ' +cambiando +'¥');
            divweb.innerHTML = 'El cambio correspondiente a ' +euros +'€ en yenes es: ' +cambiando +'¥';
        break;
    }
}

//Establecemos las constantes que és el valor de las distintas divisas en correspondéncia a 1€.
const libra = 0.86;
const dolar = 1.28611;
const yen = 129.852;
//Pedimos al usuario y almacenamos en constantes la cantidad de € a cambiar y a que divisa convertirlo.
let euro = Number(prompt('¿Cuántos euros deseas cambiar?'));
let divisa = prompt('¿A que moneda desas hacer el cambio? 1) Libras.  2) Dólares.  3) Yenes.');
//Creamos la variable que nos hará de enlace con el html.
let divweb = document.getElementById('resultado');
//Y el último paso, llamamos a la función para que se ejecute.
cambio(euro, divisa);