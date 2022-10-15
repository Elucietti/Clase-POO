 export class EquipoMedico{
    private medico:string;

    constructor(paraMedico:string){
        this.medico=paraMedico;
    }

    public getTecnico():string{
        return this.medico;
    }

    public setTecnico(pMedico:string):void{
        this.medico=pMedico;
    }
}