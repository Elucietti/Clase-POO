"use strict";
exports.__esModule = true;
var lavarropa = /** @class */ (function () {
    function lavarropa(parametroEncendido, parametroLavEco, parametroLavInt, parametroCentrifugado, parametroconsumo, parametrocosto, parametropeso) {
        this.encendido = parametroEncendido;
        this.lavadoEcologico = parametroLavEco;
        this.lavadoIntenso = parametroLavInt;
        this.centrifugado = parametroCentrifugado;
        this.consumo = parametroconsumo;
        this.costo = parametrocosto;
        this.peso = parametropeso;
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
    lavarropa.prototype.setConsumo = function (pconsumo) {
        this.consumo = pconsumo;
    };
    lavarropa.prototype.getconsumo = function () {
        if (this.consumo === true) {
            var eficiencia = this.consumo = false;
            return this.consumo;
        }
        else {
            var noEficiente = this.consumo = true;
            return this.consumo;
        }
    };
    lavarropa.prototype.setBalance = function () {
        var resultado = this.costo / this.peso;
        return resultado;
    };
    lavarropa.prototype.setGama = function () {
        var gama = '';
        if (this.setBalance < 3) {
            gama = "equipo de baja gama";
        }
        else {
            gama = "equipo alta gama";
        }
        return gama;
    };
    return lavarropa;
}());
var lavDream = new lavarropa(true, 0, 0, 0, true, 50000, 120);
lavDream.estado();
var estados = lavDream.estado();
lavDream.setLavEco(30);
var tiempoEco = lavDream.lavEco();
lavDream.setLavInt(0);
var tiempoInt = lavDream.lavInt();
lavDream.setCentri(15);
var tiempoCentri = lavDream.centri();
lavDream.setConsumo();
var efi = lavDream.getconsumo();
lavDream.setBalance();
var balan = lavDream.setBalance();
lavDream.setGama();
var gam = lavDream.setGama();
console.log("encendido:  " + estados);
console.log("tiempo lavado ecologico: " + tiempoEco + " minutos");
console.log("tiempo lavado intenso: " + tiempoInt + " minutos");
console.log("centrifugado: " + tiempoCentri + " minutos");
console.log("equipo de bajo consumo: " + efi);
console.log("balance: " + balan);
console.log("tipo de equipo: " + gam);
/*
La funcionalidad de la clase debe ser:
-Todos los metodos get y set
-Comprobar si el electrodomestico es de bajo consumo (valor booleano)
-Calcular el balance (costo dividido peso)
-Indicar si es un producto de alta gama(balance mayor que 3)
*/ 
