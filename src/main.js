export default class App {


factorial(numero) {
let x,resultado;
resultado = 1;
for (x = 1; x <= numero; x++) {
    resultado = resultado * x;
}
return resultado;
}







} // No borrar

let app = new App();
console.log(app.factorial(5));