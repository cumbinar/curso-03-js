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