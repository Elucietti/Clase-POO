import { Persona } from "./Persona";

export class Jugador extends Persona{
    private nCamisaeta:number;
    private estado:string;

    public constructor(paraCamiseta:number, paraEstado:string){
        super();
        this.nCamisaeta=paraCamiseta;
        this.estado=paraEstado;
    }

    public getCamiseta():number{
        return this.nCamisaeta;
    }
    public setCamiseta(pcamiseta:number):void{
        this.nCamisaeta=pcamiseta;
    }
    public getEstado():string{
        return this.estado;
    }
    public setEstado(pEstado:string):void{
        this.estado=pEstado;
    }
}