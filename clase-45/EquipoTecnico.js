"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EquipoTecnico = void 0;
var Persona_1 = require("./Persona");
var EquipoTecnico = /** @class */ (function (_super) {
    __extends(EquipoTecnico, _super);
    function EquipoTecnico(paraTecnico) {
        var _this = _super.call(this) || this;
        _this.tecnico = paraTecnico;
        return _this;
    }
    EquipoTecnico.prototype.getTecnico = function () {
        return this.tecnico;
    };
    EquipoTecnico.prototype.setTecnico = function (ptecnico) {
        this.tecnico = ptecnico;
    };
    return EquipoTecnico;
}(Persona_1.Persona));
exports.EquipoTecnico = EquipoTecnico;
