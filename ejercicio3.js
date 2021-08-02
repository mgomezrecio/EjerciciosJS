/*
Dada una palabra, ver si se lee igual de izquierda a derecha
*/

function palindromo(palabra) {
    let texto = palabra.split('').reverse().join('');
    if (palabra === texto) {
        console.log(`${palabra} SI se lee igual de izquierda a derecha`);
    } else {
        console.log(`${palabra} NO se lee igual de izquierda a derecha`);
    }
}
palindromo("aaiaa");