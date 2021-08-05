/*
Números pares e impares del 1 al 100 
*/

function numerosPares() {
    for (i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(`Número par: ${i}`);
        } else {
            console.log(`Número impar: ${i}`);
        }
    }
}
numerosPares();