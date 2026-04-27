//1.	Declara una variable que pueda almacenar número o string
//  y crea una función que valide si el valor es número; si lo es, 
// multiplícalo por 2, si es texto, muéstralo en mayúsculas. 

function mostrarNum(valor: number): number {
    return valor * 2;
}

function mostrarTexto(valor: string): string {
    return valor.toUpperCase();
}

console.log(mostrarNum(250));
console.log(mostrarTexto("hola capitan america"));