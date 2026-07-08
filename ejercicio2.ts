//2.	Crea una función que reciba un arreglo de números y retorne la suma total de sus elementos. 
function sumarNumeros(numeros: number[]): number {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

console.log(sumarNumeros([1, 2, 3, 4])); 