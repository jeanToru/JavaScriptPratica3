//
// Programa de ejemplo - Hola mundo!
//

console.log('Hola mundo!');

let numero = parseFloat(prompt('Adivine el numero secreto'));

let secreto = 4;



while (secreto != numero ) {
     numero = parseFloat(prompt('Adivine el numero secreto'));
}