/*
Dado dos numeros, reproducir tablas de multiplicar entre un número y el otro
*/

function tablaMultiplicar(n1, n2) {
    if (n1 < n2) {
        while (n1 <= n2) {
            console.log(`Esta es la tabla del ${n1} `);
            console.log("************************");
            for (i = 1; i <= 10; i++) {
                let multiplicar = (n1 * i);
                let resultado = `${i} X ${n1} = ${multiplicar}`;
                console.log(resultado);
            }
            n1++;
            console.log("************************");
        }
    } else if (n1 > n2) {
        while (n1 >= n2) {
            console.log(`Esta es la tabla del ${n1} `);
            console.log("************************");
            for (i = 1; i <= 10; i++) {
                let multiplicar = (n1 * i);
                let resultado = `${i} X ${n1} = ${multiplicar}`;
                console.log(resultado);
            }
            n1--;
            console.log("************************");
        }
    } else {
        console.log(`Esta es la tabla del ${n1} `);
        console.log("************************");
        for (i = 1; i <= 10; i++) {
            let multiplicar = (n1 * i);
            let resultado = `${i} X ${n1} = ${multiplicar}`;
            console.log(resultado);
        }
    }

}

tablaMultiplicar(17, 19);