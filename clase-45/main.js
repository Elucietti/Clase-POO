"use strict";
exports.__esModule = true;
var EquipoMedico_1 = require("./EquipoMedico");
var EquipoTecnico_1 = require("./EquipoTecnico");
var Jugador_1 = require("./Jugador");
var jugador1 = new Jugador_1.Jugador(10, "titular");
var jugador2 = new Jugador_1.Jugador(5, "titular");
var jugador3 = new Jugador_1.Jugador(9, "suplente");
var arregloEquipo = [jugador1, jugador2, jugador3];
var medico1 = new EquipoMedico_1.EquipoMedico("asistencia primaria");
var medico2 = new EquipoMedico_1.EquipoMedico("masajista");
var arregloMedicos = [medico1, medico2];
var tecnico1 = new EquipoTecnico_1.EquipoTecnico("Preparador");
var tecnico2 = new EquipoTecnico_1.EquipoTecnico("director tecnico");
var tecnico3 = new EquipoTecnico_1.EquipoTecnico("asistente tecnico");
var arregloTecnicos = [tecnico1, tecnico2, tecnico3];
//console.log(arregloEquipo);
//let seleccion:SelecciondeFutbol=new SelecciondeFutbol("Argentina",arregloEquipo,arregloTecnicos,arregloMedicos);
//console.log(seleccion);
jugador1.setNombre("emanuel");
jugador1.setApellido("lucietti");
jugador1.setPasaporte(32768353);
jugador1.setFecha('22-4-1987');
console.log(jugador1);
