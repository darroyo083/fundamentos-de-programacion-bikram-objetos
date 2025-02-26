//  objetos
let Coche = {
    marca: "Ford",
    modelo: "Focus",
    matricula: "1111",
}

let Casa = {
    codPostal: "28001",
    calle: "Serrano",
    portal: 1,
    piso: 3,
}

let FullStackDeveloper = {
    lenguajes: ["JavaScript", "Python", "Java", "C++"],
    proyectos: ["Proyecto 1", "Proyecto 2", "Proyecto 3"],
}

let Perro = {
    nombre: "Rex",
    raza: "Pastor Alemán",
    color: "Marrón",
    edad: 3,
    ladrar: function() {
        console.log("Guau guau");
    },
    popo: function() {
        return Math.random() * 3;
    },
}

let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde, Led.azul];
Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date()
Impresora.imprimiendo = {
    nombreArchivo: "informe",
    copias: 3,
    numPaginas: 10,
}

// iteraciones pair programming
// objetos
let Noticia = {
    titular: "Noticia de última hora",
    cuerpo: "Cuerpo de la noticia",
}

const Persona = {
    nombre: "Juan",
    apellidos: "Martínez",
    edad: 30,
}

const Avion = {
    numPasajeros: 150,
    despegar: function() {
        console.log("despegando");
    },
    volar: function() {
        console.log("llegando al destino");
    },
    aterrizar: function() {
        console.log("aterrizando");
    }
};

const Paquete = {
    contenido: [
        { nombre: "libro", cantidad: 1 },
    ]
}

const Pais = {
    numHabitantes: 10000000,
    continente: "Europa",
    gentilicio: "Español",
}

// lectura de propiedades
let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta
const pixeles = Pantalla.pixeles
let especificaciones = Movil["especificaciones"]

// modificación de propiedades
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !Led.encendido;
Movil.temperatura = "20º"