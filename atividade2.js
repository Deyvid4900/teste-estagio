const validaFibonacci = (num) =>{

    function validaRaizQuadrada(x) {
        let s = parseInt(Math.sqrt(x));
        return s * s === x;
    }

    return validaRaizQuadrada(5 * num * num + 4) || validaRaizQuadrada(5 * num * num - 4);
}

let numero = 9;
if (validaFibonacci(numero)) {
    console.log(numero + " é um número de Fibonacci.");
} else {
    console.log(numero + " não é um número de Fibonacci.");
}
