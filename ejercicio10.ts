//Crea una interfaz genérica Respuesta<T> que tenga: 
//un campo data 
//un campo status
//Luego crea dos ejemplos: uno con string y otro con número.


interface Respuesta<T> {
    data: T; 
    status: number;
}

const respuestaTexto: Respuesta<string> = {
    data: "Hola",
    status: 200
};

const respuestaNumero: Respuesta<number> = {
    data: 100,
    status: 200
};

console.log(respuestaTexto);
console.log(respuestaNumero);
