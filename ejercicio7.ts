//7.	Define una interfaz Empresa que contenga un arreglo de empleados y crea una función 
// que muestre todos los nombres de los empleados. 

interface Empleado {
    nombre: string;
    salario: number;
}

interface Empresa {
    empleados: Empleado[];
}

function mostrarEmpleados(emp: Empresa) {
    emp.empleados.forEach(e => {
        console.log(e.nombre);
    });
}

const empresa1: Empresa = {
    empleados: [
        { nombre: "Luis", salario: 1000 },
        { nombre: "Maria", salario: 2000 }
    ]
};

mostrarEmpleados(empresa1);