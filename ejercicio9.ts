//9.	Implementa una clase Estudiante con constructor, atributos públicos 
// (nombre, nota) y un método que indique si aprobó o no (nota ≥ 3). 

class Estudiante {
    public nombre: string;
    public nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    aprobo(): string {
        if (this.nota >= 3) {
            return "Aprobó";
        } else {
            return "No aprobó";
        }
    }
}

const est1 = new Estudiante("Carlos", 3.5);
console.log(est1.aprobo());