import { Persona } from "./Persona";

 export class EquipoMedico extends Persona{
    private medico:string;

    public constructor(paraMedico:string){
        super();
        this.medico=paraMedico;
    }

    public getTecnico():string{
        return this.medico;
    }

    public setTecnico(pMedico:string):void{
        this.medico=pMedico;
    }
}