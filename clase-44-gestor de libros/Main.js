"use strict";
exports.__esModule = true;
var GestorDeLibros_1 = require("./GestorDeLibros");
var Libro_1 = require("./Libro");
var libro1 = new Libro_1.Libro("martin Fierro", "Jose Hernandez", "narrativo");
var libro2 = new Libro_1.Libro("Ana Frank", "Annelies Marie Frank", "autobiografia");
var arregloDelibros = [libro1, libro2];
var gestorTdf = new GestorDeLibros_1.GestorDeLibros(arregloDelibros);
//busca libro3
var libro3 = new Libro_1.Libro("don Segundo Sombra", "ricardo guiraldes", "novela");
var respuestaRecibida = gestorTdf.consultarLibro(libro3);
console.log(respuestaRecibida);
//registro el libro 3 y consulto si existe
gestorTdf.registrarLibro(libro3);
var respuestaRecibida2 = gestorTdf.consultarLibro(libro3);
console.log(respuestaRecibida2);
console.log(arregloDelibros);
//elimino libro 3
gestorTdf.eliminarLibro(libro3);
var respuestaRecibida3 = gestorTdf.consultarLibro(libro3);
console.log(respuestaRecibida3);
console.log(arregloDelibros);
