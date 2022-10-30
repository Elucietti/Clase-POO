"use strict";
exports.__esModule = true;
exports.ListadoDeAnimales = void 0;
var ListadoDeAnimales = /** @class */ (function () {
    function ListadoDeAnimales(paraListado) {
        this.listaDeAnimales = new Array;
        this.listaDeAnimales = paraListado;
    }
    ListadoDeAnimales.prototype.buscar = function (animal) {
        var posicion = false;
        for (var i = 0; i <= this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === animal) {
                posicion = true;
            }
        }
        return posicion;
    };
    ListadoDeAnimales.prototype.agregarAnimal = function (animal) {
        this.listaDeAnimales.push(animal);
    };
    ListadoDeAnimales.prototype.removerAnimal = function (animal) {
        for (var i = 0; i <= this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === animal) {
                this.listaDeAnimales.splice(i, 1);
            }
        }
    };
    return ListadoDeAnimales;
}());
exports.ListadoDeAnimales = ListadoDeAnimales;
