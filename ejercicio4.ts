//Crea un arreglo de objetos usando una interfaz Producto (nombre, precio) 
// y muestra solo los productos con precio mayor a 50. 
interface Produc {
    nombre: string;
    precio: number;
}

const productoso: Produc[] = [
    { nombre: "Camisa", precio: 30 },
    { nombre: "Zapatos", precio: 80 },
    { nombre: "Gorra", precio: 20 }
];

const caroso = productoso.filter(p => p.precio > 50);

console.log(caroso);
