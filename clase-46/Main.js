"use strict";
exports.__esModule = true;
var Gestor_1 = require("./Gestor");
var Libro_1 = require("./Libro");
var bibloteca = new Gestor_1.Gestor("Bibloteca");
var libro_1 = new Libro_1.Libro("harry potter 1", "J.K Rowling", "fantasia");
var libro_2 = new Libro_1.Libro("harry potter 2", "J.K Rowling", "fantasia");
var libro_3 = new Libro_1.Libro("harry potter 3", "J.K Rowling", "fantasia");
var libro_4 = new Libro_1.Libro("sherlock holmes", "arthur conan doyle", "misterio");
var libro_5 = new Libro_1.Libro("el señor de los anillos", "J.R.R tolkien", "fantasia");
var libro_6 = new Libro_1.Libro("cien años de soledad", "gabriel gracia marquez", "novela");
bibloteca.insertarLibro(libro_1);
bibloteca.insertarLibro(libro_2);
bibloteca.insertarLibro(libro_3);
bibloteca.insertarLibro(libro_4);
bibloteca.insertarLibro(libro_5);
console.log(bibloteca.toString());
var arreglo = bibloteca.getLibros();
