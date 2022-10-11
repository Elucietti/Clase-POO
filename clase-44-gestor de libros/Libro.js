"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(pNombre, pAutor, pGenero) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.genero = pGenero;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Libro.prototype.toString = function () {
        return 'Nombre del libro: ' + this.nombre + ' Autor: ' + this.autor + ' Genero literario: ' + this.genero;
    };
    return Libro;
}());
exports.Libro = Libro;
