/*
Dados dos arrays, devolver solo un array con los elementos comunes.
*/

function elementosComunes(array1, array2) {
    let filtrar = array1.filter(elemento => {
        return array2.includes(elemento)

    });
    return filtrar;
}

console.log(elementosComunes([1, 2, 3, 4, 5], [1, 4, 2, 9]));