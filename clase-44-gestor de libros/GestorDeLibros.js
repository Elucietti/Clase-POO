"use strict";
exports.__esModule = true;
exports.GestorDeLibros = void 0;
var GestorDeLibros = /** @class */ (function () {
    function GestorDeLibros(pListado) {
        this.listadoDeLibros = pListado;
    }
    GestorDeLibros.prototype.consultarLibro = function (pLibro) {
        var respuesta = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].getNombre() === pLibro.getNombre()) {
                posicion = i;
                respuesta = true;
            }
        }
        return respuesta;
    };
    GestorDeLibros.prototype.registrarLibro = function (pAuto) {
        this.listadoDeLibros.push(pAuto);
    };
    GestorDeLibros.prototype.eliminarLibro = function (pAuto) {
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].getNombre() === pAuto.getNombre()) {
                this.listadoDeLibros.splice(i, 1);
            }
        }
    };
    return GestorDeLibros;
}());
exports.GestorDeLibros = GestorDeLibros;
