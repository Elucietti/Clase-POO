"use strict";
exports.__esModule = true;
var Jugador_1 = require("./Jugador");
var jugador1 = new Jugador_1.Jugador(10, "titular");
var jugador2 = new Jugador_1.Jugador(5, "titular");
var jugador3 = new Jugador_1.Jugador(9, "suplente");
var arregloEquipo = [jugador1, jugador2, jugador3];
console.log(arregloEquipo);
