import { EquipoMedico } from "./EquipoMedico";
import { EquipoTecnico } from "./EquipoTecnico";
import { Jugador } from "./Jugador";
import { SelecciondeFutbol } from "./SeleccionDeFutbol";

let jugador1:Jugador=new Jugador(10,"titular"); 
let jugador2:Jugador=new Jugador(5,"titular");
let jugador3:Jugador=new Jugador(9,"suplente");
let arregloEquipo:Jugador[]=[jugador1,jugador2,jugador3];

let medico1:EquipoMedico=new EquipoMedico("asistencia primaria");
let medico2:EquipoMedico=new EquipoMedico("fisioterapeuta");
let arregloMedicos:EquipoMedico[]=[medico1,medico2];

let tecnico1:EquipoTecnico=new EquipoTecnico("Preparador");
let tecnico2:EquipoTecnico=new EquipoTecnico("director tecnico");
let tecnico3:EquipoTecnico=new EquipoTecnico("asistente tecnico");
let arregloTecnicos:EquipoTecnico[]=[tecnico1,tecnico2,tecnico3];

console.log(arregloEquipo);