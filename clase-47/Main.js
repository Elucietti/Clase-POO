"use strict";
exports.__esModule = true;
var CuentaAhorro_1 = require("./CuentaAhorro");
var CuentaCorriente_1 = require("./CuentaCorriente");
var Persona_1 = require("./Persona");
var persona1 = new Persona_1.Persona("Emanuel", "Lucietti", 32768353);
var Cuentaahorro1 = new CuentaAhorro_1.CuentaAhorro(persona1, 123456, 2000);
var CuentaCorriente1 = new CuentaCorriente_1.CuentaCorriente(persona1, 456789, 5000);
Cuentaahorro1.Ingresar(4000);
Cuentaahorro1.setInteres(1);
Cuentaahorro1.ActualizarSaldo();
var saldo1 = Cuentaahorro1.getSaldo();
console.log("saldo: " + saldo1);
var retiro1 = Cuentaahorro1.Retirar(13000);
console.log(retiro1);
