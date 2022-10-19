"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(ptitulo, pAutor, pGenero) {
        this.titulo = ptitulo;
        this.autor = pAutor;
        if (pGenero != undefined)
            this.genero = pGenero;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getGenero = function () {
        if (this.genero != undefined)
            return this.genero;
        return "";
    };
    Libro.prototype.toString = function () {
        return 'Titulo: ' + this.titulo + '- Autor: ' + this.autor + '- Genero: ' + this.genero;
    };
    return Libro;
}());
exports.Libro = Libro;
