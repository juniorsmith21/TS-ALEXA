//3.	Define una interfaz Persona con nombre, 
// edad y un método que retorne un mensaje personalizado. 
// Luego crea un objeto que la implemente. 
interface Persona {
    nombre: string;
    edad: number;
    saludar(): string;
}

const persona1: Persona = {
    nombre: "Smith Robert",
    edad: 20,
    saludar() {
        return "Hola, yo soyyyyy " + this.nombre;
    }
};

console.log(persona1.saludar());
