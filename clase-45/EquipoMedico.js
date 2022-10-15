"use strict";
exports.__esModule = true;
exports.EquipoMedico = void 0;
var EquipoMedico = /** @class */ (function () {
    function EquipoMedico(paraMedico) {
        this.medico = paraMedico;
    }
    EquipoMedico.prototype.getTecnico = function () {
        return this.medico;
    };
    EquipoMedico.prototype.setTecnico = function (pMedico) {
        this.medico = pMedico;
    };
    return EquipoMedico;
}());
exports.EquipoMedico = EquipoMedico;
