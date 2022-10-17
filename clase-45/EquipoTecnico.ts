import { Persona } from "./Persona";

export class EquipoTecnico extends Persona{
    private tecnico:string;

    public constructor(paraTecnico:string){
        super();
        this.tecnico=paraTecnico;
    }

    public getTecnico():string{
        return this.tecnico;
    }

    public setTecnico(ptecnico:string):void{
        this.tecnico=ptecnico;
    }
}