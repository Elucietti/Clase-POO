"use strict";
exports.__esModule = true;
var lavarropa = /** @class */ (function () {
    function lavarropa(parametroEncendido, parametroLavEco, parametroLavInt, parametroCentrifugado) {
        this.encendido = parametroEncendido;
        this.lavadoEcologico = parametroLavEco;
        this.lavadoIntenso = parametroLavInt;
        this.centrifugado = parametroCentrifugado;
    }
    lavarropa.prototype.estado = function () {
        if (this.encendido === true) {
            var on = this.encendido = false;
            return this.encendido;
        }
        else {
            var off_1 = this.encendido = true;
            return this.encendido;
        }
    };
    lavarropa.prototype.setLavEco = function (lavUsuario) {
        this.lavadoEcologico = lavUsuario;
    };
    lavarropa.prototype.lavEco = function () {
        return this.lavadoEcologico;
    };
    lavarropa.prototype.setLavInt = function (lavUsuario2) {
        this.lavadoIntenso = lavUsuario2;
    };
    lavarropa.prototype.lavInt = function () {
        return this.lavadoIntenso;
    };
    lavarropa.prototype.setCentri = function (tiempoCentri) {
        this.centrifugado = tiempoCentri;
    };
    lavarropa.prototype.centri = function () {
        return this.centrifugado;
    };
    return lavarropa;
}());
var lavDream = new lavarropa(true, 0, 0, 0);
lavDream.estado();
var estados = lavDream.estado();
lavDream.setLavEco(30);
var tiempoEco = lavDream.lavEco();
lavDream.setLavInt(0);
var tiempoInt = lavDream.lavInt();
lavDream.setCentri(15);
var tiempoCentri = lavDream.centri();
console.log("encendido:  " + estados);
console.log("tiempo lavado ecologico: " + tiempoEco + " minutos");
console.log("tiempo lavado intenso: " + tiempoInt + " minutos");
console.log("centrifugado: " + tiempoCentri + " minutos");
