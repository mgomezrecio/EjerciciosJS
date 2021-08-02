/*
Tabla de multiplicar del 1 al 10
*/

function tablaMultiplicar() {
    for (j = 1; j <= 10; j++) {
        console.log(`Esta es la tabla del ${j} `);
        console.log("************************");
        for (i = 1; i <= 10; i++) {
            let multiplicar = (j * i);
            let resultado = `${i} X ${j} = ${multiplicar}`;
            console.log(resultado);
        }
        if (j === 10) {
            console.log("*************");
        } else {
            console.log("************************");
        }
    }
}
tablaMultiplicar();