//
// Programa de ejemplo - Hola mundo!
//

console.log('Hola mundo!');

let numero = parseFloat(prompt('Digite el numero'));

let contador = 1;

if (numero > 0) {
    while (contador <= numero) {

        if (contador % 3 == 0 && contador % 5 == 0) {
            console.log('🍺', contador);
        } else if (contador % 3 != 0 && contador % 5 == 0) {
            console.log('🍔', contador);
        }
        else if (contador % 3 == 0 && contador % 5 != 0) {
            console.log('🚀', contador);
        } else {
            console.log(contador);
        }
        contador++;
    }

}
else {
    console.log("Error");
}
