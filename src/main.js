// Fundamentos de Programación
// Alumno: Diego Alejandro Gentner Polanco
// 1er Semestre Grupo H

export default class App {

//Función que determina el factorial de un número
factorial(numero) {
let x,resultado;
resultado = 1;
for (x = 1; x <= numero; x++) {
    resultado = resultado * x;
}
return resultado;
}


//Función que convierte un número a una cantidad de asteriscos similar al número
convertirAString(numero) {
let resultado = "";
let x = 1;
while (x <= numero) {
    resultado = resultado + "*"
    x++;
}
return resultado; 
}


//Función que cuenta la cantidad de números divisibles entre un número
obtenerDivisibles(numero) {
let resultado = 0;
let x = 0;
do {
    if ((numero % x)==0) {
        resultado = resultado + 1;
    } else {
        resultado = resultado;
    }
    x++;
} while (x <= numero);
return resultado;
}



//Función que eleva un número a determinada potencia
elevar(numero, potencia) {
let resultado = 1;
let x = 1;
while (x<=potencia) {
    resultado = resultado * numero;
    x++;
}
return resultado;
}




} // No borrar Fin de App

let app = new App();
console.log(app.factorial(5));
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(6));
console.log(app.elevar(3,4));