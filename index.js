//1
const Coche = {
    marca: "opel",
    modelo: "corsa",
    matricula: "1234 ABC"
};

//2
const Casa = {
    codPostal: 12345,
    calle: "puerta del Sol",
    portal: 1,
    piso: 1,
};

//3
const FullStackDeveloper = {
    lenguajes: ["Javascript", "Python", "Java", "PHP"],
    proyectos: ["Calculadora Web", "E-commerce", "Blog Personal"]
};

//4
const Perro = {
    nombre: "Toby",
    raza: "Pastor alemán",
    color: "Negro",
    edad: 3,
    ladrar: function(){
        console.log("Woof!");
    },
    popo: function(){
        return Math.random() * 3;
    }
}

//5
const marcaPortatil = Portatil.marca;

//6
const marcaPortatil2 = Portatil["marca"];

//7
const grupos = Concierto.grupos;

//8
const RGB = [Led.rojo, Led.verde, Led.azul];

//9
Portatil.modelo = "P345";

//10
Concierto.cartelera.push("Guns N' Roses");

/* Otra opción: 
Concierto.cartelera[Concierto.cartelera.length] = "Gun n' Roses"
*/

//11
Concierto.fecha = new Date();

//12
Impresora.imprimiendo = {
    nombreArchivo: "imprimir.pdf",
    copias: 1,
    numPaginas: 1
};

//13
const Noticia = {
    titular: "Brasil vuelve a ganar el mundial",
    cuerpo: "Efectivamente, lo ha vuelto a hacer"
};

//14
const Persona = {
    nombre: "John",
    apellidos: "Wilson Smith",
    edad: 30
};

//15
const Avion = {
    numPasajeros: 100,
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    }
};

//16
const Paquete = {
    contenido: ["ropa", "cepillo de dientes", "libro", "carpeta"]
}

//17
const Pais = {
    numHabitantes: 48000000,
    continente: "Europa",
    gentilicio: "Español"
}

//18
const codError = O_Error.codigo;

//19
const integrantes = Grupo.integrantes;

//20
const nivelesTinta = Impresora.tinta;

//21
const pixeles = Pantalla.pixeles;

//22
const especificaciones = Movil["especificaciones"];

//23
Grupo.numIntegrantes = 5;

//24
Pantalla.dimensiones = "1920x1080";

//25
if (Led.encendido){
    Led.encendido = false;
} else {
    Led.encendido = true;
};

//26
Movil.temperatura = "20º"