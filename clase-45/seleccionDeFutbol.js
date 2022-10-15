"use strict";
exports.__esModule = true;
exports.SelecciondeFutbol = void 0;
var SelecciondeFutbol = /** @class */ (function () {
    function SelecciondeFutbol(paraNombre, paraJugador, paratecnico, paramedico) {
        this.listaJugadores = new Array;
        this.listaTecnico = new Array;
        this.listaMedico = new Array;
        this.nombreDeEquipo = paraNombre;
        this.listaJugadores = paraJugador;
        this.listaTecnico = paratecnico;
        this.listaMedico = paramedico;
    }
    SelecciondeFutbol.prototype.setNombreDeEquipo = function (nEquipo) {
        this.nombreDeEquipo = nEquipo;
    };
    SelecciondeFutbol.prototype.setJugador = function (pJugador) {
        this.listaJugadores = pJugador;
    };
    SelecciondeFutbol.prototype.setTecnico = function (pTecnico) {
        this.listaTecnico = pTecnico;
    };
    SelecciondeFutbol.prototype.setMedico = function (pMedico) {
        this.listaMedico = pMedico;
    };
    return SelecciondeFutbol;
}());
exports.SelecciondeFutbol = SelecciondeFutbol;
