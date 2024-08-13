
/**Esto lo hizo chatgpt no entiendo muy bien que hizo pero se supone que esta deberia ser unas de las más complejas e ineficientes
    para hallar la paridad de un numero   **/
function encontrarParidad(numero) {
    // Convertir el número a una cadena binaria
    let binario = (numero >>> 0).toString(2);
    
    // Invertir la cadena binaria
    let binarioInvertido = binario.split('').reverse().join('');
    
    // Contar el número de '1's en la cadena binaria invertida
    let cuentaDeUnos = 0;
    for (let i = 0; i < binarioInvertido.length; i++) {
        if (binarioInvertido[i] === '1') {
            cuentaDeUnos++;
        }
    }
    
    // Verificar si la cantidad de '1's es par o impar
    let esPar = cuentaDeUnos % 2 === 0;

    // Evaluar un ciclo innecesario para "comprobar" el resultado
    let resultadoFinal = true;
    for (let i = 0; i < 10; i++) {
        resultadoFinal = resultadoFinal && esPar;
    }

    return resultadoFinal;
}

// Ejemplo de uso
console.log(encontrarParidad(4));  // true (es par)
console.log(encontrarParidad(5));  // false (es impar)
