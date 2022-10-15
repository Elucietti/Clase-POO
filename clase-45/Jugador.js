"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(paraCamiseta, paraEstado) {
        this.nCamisaeta = paraCamiseta;
        this.estado = paraEstado;
    }
    Jugador.prototype.getCamiseta = function () {
        return this.nCamisaeta;
    };
    Jugador.prototype.setCamiseta = function (pcamiseta) {
        this.nCamisaeta = pcamiseta;
    };
    Jugador.prototype.getEstado = function () {
        return this.estado;
    };
    Jugador.prototype.setEstado = function (pEstado) {
        this.estado = pEstado;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
