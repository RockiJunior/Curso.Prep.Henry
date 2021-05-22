// No cambies los nombres de las funciones.

const { array } = require("yargs");

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:

    // let array2 = array.map(function(x) {
    //     return x + 1;
    // });
    // return array2;

    array2 = [];
    for (let i = 0; i < array.length; i++) {
        array2[i] = array[i] + 1;
    }
    return array2;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(' ')
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:

    // return array.includes(elemento);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true
        }
    }
    return false;
}


function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:

    // return numeros.reduce((a, b) => a + b);

    accumulator = 0;
    for (let i = 0; i < numeros.length; i++) {
        accumulator = accumulator + numeros[i];
    }
    return accumulator;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:

    // allTest = resultadosTest.length;
    // result = resultadosTest.reduce((a, b) => a + b);
    // return result / allTest;

    // accumulator = 0;
    // for (let i = 0; i < resultadosTest.length; i++) {
    //     accumulator = accumulator + resultadosTest[i];
    // }
    // return accumulator / resultadosTest.length;

    return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:

    // return Math.max.apply(Math, numeros);
    let valorMaximo = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > valorMaximo) {
            valorMaximo = numeros[i]
        }
    }
    return valorMaximo;
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:

    // let args = Array.from(arguments);
    // if (args.length < 1) {
    //     return 0;
    // };
    // return args.reduce((a, b) => a * b);

    let args = Array.from(arguments);
    if (args.length < 1) {
        return 0;
    }
    let multiplicar = 1;
    for (let i = 0; i < args.length; i++) {
        multiplicar = multiplicar * args[i];
    }
    return multiplicar;


}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí

    // let esMayorQue18 = arreglo.filter(i => i > 18).length;
    // return esMayorQue18;

    let esMayorQue18 = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 18) {
            esMayorQue18 = esMayorQue18 + 1;
        }
    }
    return esMayorQue18;

}


function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí
    let result = "Es fin de semana";
    if (numeroDeDia >= 2 && numeroDeDia <= 6) {
        result = "Es dia Laboral";
    }
    return result
}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let number = n.toString();
    return number.charAt(0) === "9";
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí 
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === arreglo[i + 1]) {
            return true;
        }
        return false;
    }
}


function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

    let nuevoArray = array.filter(i => i === "Enero" || i === "Marzo" || i === "Noviembre")
    for (let i = 0; i < nuevoArray.length; i++) {
        if (nuevoArray.length < 3) {
            return "No se encontraron los meses pedidos"
        } else { return nuevoArray };
    }
}

function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let nuevoArray = array.filter(i => i > 100 && i <= 200);
    return nuevoArray;
}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var arr = [];
    var suma = numero;
    let coincidio = false;
    let mensaje = "Se interrumpió la ejecución";
    for (let i = 0; i < 10; i++) {
        suma = suma + 2;
        arr.push(suma);
        if (suma === i) {
            coincidio = true;
            break
        }
    };
    if (coincidio) {
        return mensaje
    }
    return arr;
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:

    let suma = numero;
    let arr = [];
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        suma = suma + 2;
        arr.push(suma);
    }
    console.log(arr)
    return arr;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};