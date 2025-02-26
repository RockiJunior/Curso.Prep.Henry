// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    let result = Math.max(x, y);
    if (x === y) {
        result = x;
    }
    return result
}

function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    let result = 'Not allowed';
    if (edad >= 18) {
        result = 'Allowed';
    }
    return result;
}

function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    let result = 'Offline'
    if (status === 1) {
        result = 'Online';
    } else if (status === 2) {
        result = 'Away';
    }
    return result;
}

function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    result = "Hola!"
    if (idioma === 'aleman') {
        result = 'Guten Tag!'
    }
    if (idioma === 'mandarin') {
        result = 'Ni Hao!'
    }
    if (idioma === 'ingles') {
        result = 'Hello!'
    }
    return result;
}

function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue",devuelve --> "This is blue"
    //En caso que el color recibido sea "red",devuelve --> "This is red"
    //En caso que el color recibido sea "green",devuelve --> "This is green"
    //En caso que el color recibido sea "orange",devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch (color) {
        case "blue":
            return "This is blue";
        case "red":
            return "This is red";
        case "green":
            return "This is green";
        case "orange":
            return "This is orange";
        default:
            return "Color not found"
    }
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    let result = false;
    if (numero === 10 || numero === 5) {
        result = true;
    };
    return result
}

function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    let result = false;
    if (numero > 20 && numero < 50) {
        result = true;
    }
    return result;
}

function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    let result = false;

    if (Number.isInteger(numero)) {
        result = true;
    }

    return result;
}

function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    let result = numero;
    if (numero % 3 === 0 && numero % 5 === 0) {
        result = "fizzbuzz";
    } else if (numero % 3 === 0) {
        result = "fizz";
    } else if (numero % 5 === 0) {
        result = "buzz";
    }
    return result;


}

function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //O no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
    let result = false;
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        result = "Error"
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        result = "Hay negativos"
    } else if (num1 > num2 && num1 > num3 && num1 > 0) {
        result = "Número 1 es mayor y positivo"
    } else if (num3 > num1 && num3 > num2) {
        result = num3 + 1;
    }
    return result;
}

function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    let result = true;
    if (numero === 0 || numero === 1) {
        result = false;
    };
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            result = false;
        }
    }
    return result;
}

function esVerdadero(valor) {
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    result = "Soy falso";
    if (valor === true) {
        result = "Soy verdadero";
    }
    return result;

}

function tablaDelSeis() {
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí
    var tablaDelSeis = [];
    for (var i = 0; i < 11; i++) {
        tablaDelSeis.push(6 * i);
    }
    return tablaDelSeis;

}

function tieneTresDigitos(numero) {
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    let accumulator = 0;
    result = false;
    while (numero >= 1) {
        numero = numero / 10;
        accumulator++;
    }
    if (accumulator === 3) {
        result = true;
    }
    return result;
}

function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let i = 0;
    do {
        numero += 5;
        i++;
    } while (i < 8)
    return numero;


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    obtenerMayor,
    mayoriaDeEdad,
    conection,
    saludo,
    colors,
    esDiezOCinco,
    estaEnRango,
    esEntero,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
};