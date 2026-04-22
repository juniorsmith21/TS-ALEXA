function procesarNumero(valor: number): number {
    return valor * 2;
}

function procesarTexto(valor: string): string {
    return valor.toUpperCase();
}

console.log(procesarNumero(10));
console.log(procesarTexto("ropa"));