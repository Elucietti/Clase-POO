"use strict";
exports.__esModule = true;
var Pava = /** @class */ (function () {
    function Pava(PEncendido, pCalentando, pCalenTexto) {
        this.encendido = PEncendido;
        this.calentando = pCalentando;
        this.calenTexto = pCalenTexto;
    }
    Pava.prototype.getEncendido = function () {
        return this.encendido;
    };
    Pava.prototype.setEncendido = function (estado) {
        var resultado;
        if (this.encendido == true) {
            resultado = this.encendido;
        }
        else {
            resultado = this.encendido;
        }
        return resultado;
    };
    Pava.prototype.getCalentando = function () {
        return this.calentando;
    };
    Pava.prototype.getTexto = function () {
        return this.calenTexto;
    };
    Pava.prototype.setTexto = function () {
        var pTexto;
        if (this.calentando < 75) {
            pTexto = 'El agua esta para el mate';
        }
        else {
            pTexto = 'El agua esta hervida';
        }
        return pTexto;
    };
    return Pava;
}());
var pava = new Pava(true, 73, "mate");
console.log("Encendido:  " + pava.getEncendido());
console.log("Temperatura del agua: " + pava.getCalentando() + " °");
console.log(pava.setTexto());
