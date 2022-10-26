"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(pCliente, pCuenta, pSaldo) {
        this.NumeroCuenta = pCuenta;
        this.Cliente = pCliente;
        this.Saldo = 0;
    }
    Cuenta.prototype.GetNuCuenta = function () {
        return this.NumeroCuenta;
    };
    Cuenta.prototype.setNumeroCuenta = function (paNuCuenta) {
        this.NumeroCuenta = paNuCuenta;
    };
    Cuenta.prototype.getCliente = function () {
        return this.Cliente;
    };
    Cuenta.prototype.setCliente = function (paCliente) {
        this.Cliente = paCliente;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.Saldo;
    };
    Cuenta.prototype.setSaldo = function (paSaldo) {
        this.Saldo = paSaldo;
    };
    Cuenta.prototype.Ingresar = function (paramIngresar) {
        this.Saldo = this.Saldo + paramIngresar;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
