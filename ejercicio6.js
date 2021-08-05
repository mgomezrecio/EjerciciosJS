/*
Cuánto es el X % de un número
*/

function porcentaje(porcentaje, numero) {
    let operacion = (numero * (porcentaje / 100));
    return operacion;
}

console.log(porcentaje(15, 2000));