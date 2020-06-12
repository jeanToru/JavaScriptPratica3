//
// Programa de ejemplo - Hola mundo!
//

console.log('Hola mundo!');

//
// inicilicio valirables
//

let linea = 1;

let simbolo = '*';

while (linea <= 7) {
    while (linea <= 7) {
        console.log(simbolo);
        simbolo = simbolo + '*';
        linea++;
    }
    linea++;
}