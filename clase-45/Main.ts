import { EquipoMedico } from "./EquipoMedico";
import { EquipoTecnico } from "./EquipoTecnico";
import { Jugador } from "./Jugador";
import { Persona } from "./Persona";
import { SelecciondeFutbol } from "./SeleccionDeFutbol";

let jugador1:Persona=new Persona(emanuel,lucietti,32768353,22-4-1987); 
let jugador2:Persona=new Persona(santino,lucietti,40585987,3-7-2000);
let tecnico1:Persona=new Persona(pepe,luis,12456589,12-10-1974);
let medico1:Persona=new Persona(juan,topo,12569789,15-9-1993);

let arregloEquipo:SelecciondeFutbol=new SelecciondeFutbol(argentina,jugador1,tecnico1,medico1);

console.log(arregloEquipo);