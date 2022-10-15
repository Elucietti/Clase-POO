"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(parametroNombre, parametroApellido, parametroPasaporte, parametroFecha) {
        this.nombre = parametroNombre;
        this.apellido = parametroApellido;
        this.nPasaporte = parametroPasaporte;
        this.fechaDeNacimiento = parametroFecha;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Persona.prototype.getPasaporte = function () {
        return this.nPasaporte;
    };
    Persona.prototype.setPasaporte = function (pPasaporte) {
        this.nPasaporte = pPasaporte;
    };
    Persona.prototype.getFecha = function () {
        return this.fechaDeNacimiento;
    };
    Persona.prototype.setFecha = function (pfecha) {
        this.fechaDeNacimiento = pfecha;
    };
    return Persona;
}());
exports.Persona = Persona;
