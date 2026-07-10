//9.	Implementa una clase Estudiante con constructor, atributos públicos 
// (nombre, nota) y un método que indique si aprobó o no (nota ≥ 3). 

class Estudiante {
    public nom: string;
    public nota: number;

    constructor(nom: string, nota: number) {
        this.nombre = nom;
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

const estu1 = new Estudiante("Carlos", 3.5);
console.log(estu1.aprobo());
