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
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(pCliente, pNcuenta, pSaldo) {
        return _super.call(this, pCliente, pNcuenta, pSaldo) || this;
    }
    CuentaAhorro.prototype.setSaldoMinimo = function (paraSaldo) {
        this.Saldo = paraSaldo;
    };
    CuentaAhorro.prototype.getSaldoMinimo = function () {
        return this.SaldoMinimo;
    };
    CuentaAhorro.prototype.setInteres = function (pInteres) {
        this.interes = pInteres;
    };
    CuentaAhorro.prototype.getInteres = function () {
        return this.interes;
    };
    CuentaAhorro.prototype.Retirar = function (paraRetiro) {
        var saldoActual = this.Saldo - this.SaldoMinimo;
        if (saldoActual > paraRetiro) {
            this.Saldo = this.Saldo - paraRetiro;
        }
        else {
            console.log("saldo insuficiente");
        }
    };
    CuentaAhorro.prototype.ActualizarSaldo = function () {
        this.Saldo = this.Saldo * this.interes;
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
