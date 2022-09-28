"use strict";
exports.__esModule = true;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(parametroListado) {
        this.listadoDeAutos = parametroListado;
    }
    RegistroAutomotor.prototype.consultarVehiculo = function (parametroAuto) {
        var respuesta = false;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === parametroAuto.getPatente()) {
                respuesta = true;
            }
        }
        return respuesta;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (parametroAuto) {
        this.listadoDeAutos.push(parametroAuto);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (parametroAuto) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === parametroAuto.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.editarVehiculo = function (posicion, pPat, pMar) {
        this.listadoDeAutos[posicion].setPatente(pPat);
        this.listadoDeAutos[posicion].setMarca(pMar);
    };
    RegistroAutomotor.prototype.editarTitular = function (posicion, pTitu) {
        this.listadoDeAutos[posicion].setTitular(pTitu);
    };
    return RegistroAutomotor;
}());
var Auto = /** @class */ (function () {
    function Auto(paraMarca, paraModelo, paraPatente, paraTitular) {
        this.marca = paraMarca;
        this.modelo = paraModelo;
        this.patente = paraPatente;
        this.titular = paraTitular;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (pPatente) {
        this.patente = pPatente;
    };
    Auto.prototype.getTitular = function () {
        return this.titular;
    };
    Auto.prototype.setTitular = function (paraTitulo) {
        this.titular = paraTitulo;
    };
    return Auto;
}());
var auto1 = new Auto("ford", "focus", "AAA123", "Emanuel");
var auto2 = new Auto("toyota", "corolla", "BBB123", "Santino");
var auto3 = new Auto("vw", "gol", "CCC123", "Ignacio");
var arregloDeAutos = [auto1, auto2, auto3];
var registroTDF = new RegistroAutomotor(arregloDeAutos);
var auto4 = new Auto("toyota", "hilux", "SSS123", "agustina");
var respuestaRecibida = registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida);
registroTDF.registrarVehiculo(auto4);
var respuestaRecibida2 = registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida2);
console.log(arregloDeAutos.length);
console.log(auto3);
registroTDF.editarTitular(2, "frida");
console.log(auto3);
