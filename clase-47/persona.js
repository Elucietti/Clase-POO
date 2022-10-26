"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paraNombre, paraApellido, paraDni) {
        this.nombre = paraNombre;
        this.apellido = paraApellido;
        this.Dni = paraDni;
    }
    Persona.prototype.setNombre = function (paraNombre) {
        this.nombre = paraNombre;
    };
    Persona.prototype.setApellido = function (paraApellido) {
        this.apellido = paraApellido;
    };
    Persona.prototype.setDni = function (pdni) {
        this.Dni = pdni;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getDni = function () {
        return this.Dni;
    };
    return Persona;
}());
exports.Persona = Persona;
