import { EquipoMedico } from "./EquipoMedico";
import { EquipoTecnico } from "./EquipoTecnico";
import { Jugador } from "./Jugador";
import { Persona } from "./Persona";


export class SelecciondeFutbol{
    protected nombreDeEquipo:string;
    protected listaJugadores= new Array <Jugador>;
    protected listaTecnico=new Array<EquipoTecnico>;
    protected listaMedico=new Array<EquipoMedico>;

constructor(paraNombre:string,paraJugador:Array<Jugador>,paratecnico:Array<EquipoTecnico>,paramedico:Array<EquipoMedico>){
    this.nombreDeEquipo=paraNombre;
    this.listaJugadores=paraJugador;
    this.listaTecnico=paratecnico;
    this.listaMedico=paramedico;
}

setNombreDeEquipo(nEquipo:string){
    this.nombreDeEquipo=nEquipo;
}
setJugador(pJugador:Array <Jugador>){
    this.listaJugadores=pJugador;
}
setTecnico(pTecnico:Array <EquipoTecnico>){
    this.listaTecnico=pTecnico;
}
setMedico(pMedico:Array<EquipoMedico>){
    this.listaMedico=pMedico;
}



}
