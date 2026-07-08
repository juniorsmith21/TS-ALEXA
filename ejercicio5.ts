//5.	Implementa una función que reciba un objeto de tipo Empleado (con nombre y salario) 
// y retorne un mensaje indicando si su salario es alto o bajo. 
interface Empleado {
    nombre: string;
    salario: number;
}

function evaluarSalario(emp: Empleado): string {
    if (emp.salario > 2000) {
        return emp.nombre + " tiene salario alto";
    } else {
        return emp.nombre + " tiene salario bajo";
    }
}

console.log(evaluarSalario({ nombre: "Patico", salario: 1950000 }));