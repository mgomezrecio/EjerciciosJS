/*
Dado un número reproducir su tabla de multiplicar completa
*/

function tablaMultiplicar(numero) {
    let enunciado = `Esta es la tabla del ${numero} `;
    console.log(enunciado);
    for (i = 1; i <= 10; i++) {
        let multiplicar = (numero * i);
        let resultado = `${numero} X ${numero} = ${multiplicar}`;
        console.log(resultado);
    }
}

tablaMultiplicar(100);