"use strict";
exports.__esModule = true;
exports.Gestor = void 0;
var Gestor = /** @class */ (function () {
    function Gestor(pNombre) {
        this.libros = new Array;
        this.nombre = pNombre;
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
        return true;
    };
    Gestor.prototype.modificarGestor = function (paNombre) {
    };
    Gestor.prototype.modificarLibro = function (titulo) {
    };
    Gestor.prototype.eliminarLibro = function (titulo) {
    };
    return Gestor;
}());
exports.Gestor = Gestor;
