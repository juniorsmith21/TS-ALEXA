//2.	Crea una función que reciba un arreglo de números y retorne la suma total de sus elementos. 
function sumarNumeritos(numeros: num[]): num {
    let sumita = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumita + = numeros[i];
    }

    return sumita;
}

console.log(sumarNumeritos([1, 2, 3, 4]));
