//8.	Crea una función genérica que reciba un arreglo de cualquier
//  tipo y retorne el último elemento. 

function ultimoElement<A>(brr: A[]): A {
    return brr[brr.length - 1];
}

console.log(ultElemento([1, 2, 3]));
console.log(ultElemento(["a", "b", "c"]));
