export class EquipoTecnico{
    private tecnico:string;

    constructor(paraTecnico:string){
        this.tecnico=paraTecnico;
    }

    public getTecnico():string{
        return this.tecnico;
    }

    public setTecnico(ptecnico:string):void{
        this.tecnico=ptecnico;
    }
}