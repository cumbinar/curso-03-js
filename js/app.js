console.log("Hola Cumbi Tara");
const holaCumbi = function () {
    console.log('Hola mi viejo querido');
}

holaCumbi();

//Estructuras de control/////


const puntaje = 1020;

if (puntaje == 1000) {
    console.log('puntaje si es igual a 1000');
} else {
    console.log('puntaje no es igual a 1000');
}

const contador = 800;

console.log(contador);
if (contador != 500) {
    console.log('si es diferente de 500');
} else {
    console.log('no esdiferente');
}


const numero = 1000;

if (numero === "1000") {
    console.log("si es igual de forma estricta")
} else {
    console.log('No es igual estrictamente');
}

/*  !== (diferente estricto), ===(igual estricto)  */


//mayor que y menor que ////


const dinero = 200;
const totalAPagar = 300;

if (dinero >= totalAPagar) {
    console.log('Si se puede pagar')
} else {
    console.log('Saldo insuficiente')
}

const edad = 20;

if (edad < 18) {
    console.log('Eres menor de edad')
} else {
    console.log('Eres mayor de edad')
}

//Mayor igual y elseif//

const saldo = 800;
const compra = 900;
const tarjeta = false;


if (saldo >= compra) {
    console.log('si se puede pagar')
} else if (tarjeta) {
    console.log('Si puedo pagar con tarjeta')
} else {
    console.log('Fondos insuficientes')
}

///switch case para evaluar multiples condiciones///

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
         console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
         console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('aún no has seleccionado un método de pago');
}


//operador && si se cumplen dos condiciones//

const usuario = true;
const puedoPagar = false;

if (usuario && puedoPagar) {
    console.log('Si puedes hacer la compra')
} else if (!usuario) {
    console.log('Inicia seción o saca una cuenta')
} else if (!puedoPagar) {
    console.log('Fondos insuficientes')
} else {
    console.log('No puedes comprar')
}
/*!usuario esto cambia el valor de usuario a false*/