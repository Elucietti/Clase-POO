"use strict";
exports.__esModule = true;
exports.EquipoTecnico = void 0;
var EquipoTecnico = /** @class */ (function () {
    function EquipoTecnico(paraTecnico) {
        this.tecnico = paraTecnico;
    }
    EquipoTecnico.prototype.getTecnico = function () {
        return this.tecnico;
    };
    EquipoTecnico.prototype.setTecnico = function (ptecnico) {
        this.tecnico = ptecnico;
    };
    return EquipoTecnico;
}());
exports.EquipoTecnico = EquipoTecnico;
