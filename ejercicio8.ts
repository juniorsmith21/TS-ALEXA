//8.	Crea una función genérica que reciba un arreglo de cualquier
//  tipo y retorne el último elemento. 

function ultimoElemento<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

console.log(ultimoElemento([1, 2, 3])); // 3
console.log(ultimoElemento(["a", "b", "c"])); 