"use strict";
exports.__esModule = true;
exports.Gestor = void 0;
var Libro_1 = require("./Libro");
var Gestor = /** @class */ (function () {
    function Gestor(pNombre, libros) {
        this.libros = new Array;
        this.nombre = pNombre;
        if (libros != undefined)
            this.libros = libros;
    }
    Gestor.prototype.esVacio = function () {
        if (this.libros.length == 0)
            return true;
        return false;
    };
    Gestor.prototype.cantidadLibros = function () {
        return this.libros.length;
    };
    Gestor.prototype.insertarLibro = function (pLibro) {
        this.libros.push(pLibro);
    };
    Gestor.prototype.getLibros = function () {
        var nuevoArreglo = new Array;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            var titulos = this.libros[index].getTitulo();
            var autor = this.libros[index].getAutor();
            var genero = this.libros[index].getGenero();
            var nuevoLibro = new Libro_1.Libro(titulos, autor, genero);
            nuevoArreglo.push(this.libros[index]);
        }
        return this.libros;
    };
    Gestor.prototype.toString = function () {
        var resultado = "";
        for (var index = 0; index < this.cantidadLibros(); index++) {
            resultado += this.libros[index].toString() + '\n\n';
        }
        return resultado;
    };
    Gestor.prototype.consultarLibro = function (titulo) {
        var respuesta = false;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            if (this.libros[index].getTitulo() == titulo)
                return true;
        }
        return false;
    };
    Gestor.prototype.modificarGestor = function (paNombre) {
        this.nombre = paNombre;
    };
    Gestor.prototype.modificarLibro = function (titulo) {
        var pos = -1;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            if (this.libros[index].getTitulo() == titulo)
                pos = index;
        }
        this.libros[pos].setNombre(titulo);
    };
    Gestor.prototype.eliminarLibro = function (titulo) {
    };
    return Gestor;
}());
exports.Gestor = Gestor;
