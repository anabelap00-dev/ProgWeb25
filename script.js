document.write("<h3>Ejercicio 1 declaracion de variables y saludos: </h3>");
let nombre = "Anabela Perez";
let mensaje = "Hola, mi nombre es ";

document.write(mensaje);
document.write(nombre);

let a = 15;
let b = 8;
let suma = a + b;
document.write("<h3>Ejercicio 2 operaciones aritmeticas basicas: </h3>");
document.write("<p>Operador suma: " + suma + "</p>");
let resta = a - b;
document.write("<p>Operador resta: " + resta + "</p>");
let multiplicacion = a * b;
document.write("<p>Operador multiplicacion: " + multiplicacion + "</p>");
let division = a / b;
document.write("<p>Operador division: " + division + "</p>");

let dividendo = 25;
let divisor = 4;
let resto = dividendo % divisor;
document.write("<h3>Ejercicio 3 uso del modulo y operador de resto: </h3>");
document.write("<p>El resto de la division es: " + resto + "</p");

let contador = 10;
contador++;
document.write("<br><h3>Ejercicio 4 incremento y decremento: </h3>");
document.write("<p>Incremento de contador: " + contador + "</p>");
contador--;
document.write("<p>Decremento de contador: " + contador + "</p>");

let edad = 18;
let esMayorDeEdad = edad >= 18;
document.write("<h3>Ejercicio 5 operaciones de comparacion: </h3>");
document.write("<p>Operador de comparacion: " + esMayorDeEdad + "</p>");

let cadena1 = "JavaScript";
let cadena2 = "javascript";
let sonIguales = cadena1 == cadena2;
document.write("<h3>Ejercicio 6 comparacion de cadenas: </h3>")
document.write("<p>Operador de comparacion en cadena: " + sonIguales + "</p>");

let edad1 = 25;
let tieneLicencia = true;
let puedeConducir = edad > 18 && tieneLicencia;
document.write("<h3>Ejercicio 7 operador logico AND: </h3>");
document.write("<p>Operador logico: " + puedeConducir + "</p>");

let haysol = false;
let esFinDeSemana = true;
let vamosAlaPlaya = haysol || esFinDeSemana;
document.write("<h3>Ejercicio 8 operador logico OR: </h3>");
document.write("<p>Operador logico: " + vamosAlaPlaya + "</p>");

let estaLloviendo = true;
let noEstaLloviendo = !(estaLloviendo);
document.write("<h3>Ejercicio 9 operador de negacion: </h3>");
document.write("<p>Operacion negacion: " + noEstaLloviendo + "</p>");

let x = 10;
let y = 20;
let z = 30;
let resultado = (x < y) && (z != x + y);
document.write("<h3>Ejercicio 10 combinacion de operadores: </h3>");
document.write("<p>Combinacion de operaciones: " + resultado + "</p>");

document.write("<h1>Trabajo practico Nº2: Continuacion</h1>");

document.write("<h3>Ejercicio 1 mostrar un mensaje: </h3>");
let nombreingresado = prompt("Ingrese su nombre?");
document.write("<p>Hola: " + nombreingresado + "</p>");


//Ejercicio 2 suma de dos numero
let numeroingresado = prompt("Ingresa un numero");
let otronumeroingresado = prompt("Ingrese otro numero");
let numeroconvertido = Number(numeroingresado);
let otronumeroconvertido = Number(otronumeroingresado);
let otrasuma = numeroconvertido + otronumeroconvertido;

console.log("La suma es: " + otrasuma);

//Ejercicio 3 color de fondo
document.body.style.backgroundColor = "#FF714B";

//Ejercicio 4 tamaño de fuente
let = tamaniofuente = "15px";
document.body.style.fontSize = tamaniofuente;

//Ejercicio 5 comparar numeros
let numerousuario = prompt("Ingresa un numero mas");
if (numerousuario > 100) {
  console.log("El número ingresado es mayor que 100");
} else {
  console.log("El número ingresado es menor o igual que 100");
}

//Ejercicio 6 mensaje personalizado segun edad
let edaddelusuario = prompt("Que edad tenes? (Ingresar solo numeros)");
if (edaddelusuario < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

document.write("<h1>Trabajo practico Nº3: Eventos y funciones</h1>");

//Ejercicio 1 cambiar el texto de un elemento
function cambiartexto() {
  const parrafo = document.querySelector("#miTexto");
  parrafo.innerText = "¡Texto cambiado!"
}

//Ejercicio 2 mostrar mensaje segun edad
function verificarEdad() {
  const edad = prompt("¿Cuál es tu edad?");
  if (edad > 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
}

//Ejercicio 3 cambiar color de texto con condicinal
function cambiarColor() {
  const color = prompt("Escribe un color (rojo o azul):");
  const titulo = document.querySelector("#titulo");
  if (color === "rojo") {
    titulo.style.color = "red";
  } else if (color === "azul") {
    titulo.style.color = "blue";
  } else {
    alert("color no permitido");
  }
}

//Ejercicio 4 mostrar u ocultar un elemento
function toggleCaja() {
  const caja = document.querySelector("#caja");
  if (caja.style.display === "none") {
    caja.style.display = "block";
  } else {
    caja.style.display = "none";
  }
}

//Ejercicio 5 validar contraseña simple
function validarContrasena() {
  const contrasena = prompt("Ingrese su contraseña:");
  if (contrasena === "1234") {
    alert("Contraseña válida");
  } else {
    alert("Contraseña inválida");
  }
}

//Ejercicio 6 cambiar imagen segun opcion
function mostrarGato() {
  const imagen = document.querySelector("#animal");
  imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJZES4bZMT-NvvP0kx3b6HCG1vOrfRzJx2Q&s"; //imagen de gatito
}

function mostrarPerro() {
  const imagen = document.querySelector("#animal");
  imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewsCM7TcI9FMRi00MoznAFwUeLxgm1R_oXg&s"; //imagen de perrito
}

document.write("<h1>Trabajo practico Nº4: Arrays y ventos</h1>");

//Ejercicio 1 crea un array de 5 colores favoritos
function mostrarColores() {
  const colores = ["rojo", "azul", "verde", "amarillo", "violeta"];

  console.log("Primer color:", colores[0]);
  console.log("Último color:", colores[colores.length - 1]);
}

//Ejercicio 2 modoficar elementos de un array
function cambiarNombre() {
  let nombres = ["Ana", "Lucas", "Sofía"];

  console.log("Array original:", nombres);

  // Cambiar el segundo elemento (índice 1)
  nombres[1] = "Martina";

  console.log("Array modificado:", nombres);
}

//Ejercicio 3 sumar todos los elementos de un array numerico
function sumarNumeros() {
  const numeros = [5, 10, 15, 20];
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  console.log("Array:", numeros);
  console.log("Suma total:", suma);
}
//Ejercicio 4 mostrar elementos de un array en la pagina
document.getElementById("mostrarBtn").addEventListener("click", function() {
  const frutas = ["Manzana", "Banana", "Naranja", "Pera", "Kiwi"];
  const lista = document.getElementById("listaFrutas");

  lista.innerHTML = ""; // limpiar contenido previo

  for (let i = 0; i < frutas.length; i++) {
    lista.innerHTML += `<p>${frutas[i]}</p>`;
  }
});

//Ejercicoi 5 cambiar el color de las cajas usando un array 
function colorear() {
  const coloresArray = ["red", "blue", "green"];
  const cajas = document.querySelectorAll(".caja");

  cajas.forEach((caja, index) => {
    caja.style.backgroundColor = coloresArray[index % coloresArray.length];
  });
}

