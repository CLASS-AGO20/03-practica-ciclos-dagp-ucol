export default class App {


factorial(numero) {
let x,resultado;
resultado = 1;
for (x = 1; x <= numero; x++) {
    resultado = resultado * x;
}
return resultado;
}

convertirAString(numero) {
let resultado = "";
let x = 1;
while (x <= numero) {
    resultado = resultado + "*"
    x++;
}
return resultado; 
}

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





} // No borrar

let app = new App();
console.log(app.factorial(5));
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(6))