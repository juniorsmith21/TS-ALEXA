//Crea un arreglo de objetos usando una interfaz Producto (nombre, precio) 
// y muestra solo los productos con precio mayor a 50. 
interface Producto {
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    { nombre: "Camisa", precio: 30 },
    { nombre: "Zapatos", precio: 80 },
    { nombre: "Gorra", precio: 20 }
];

const caros = productos.filter(p => p.precio > 50);

console.log(caros);