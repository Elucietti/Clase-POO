
export class Jugador{
    private nCamisaeta:number;
    private estado:string;

    constructor(paraCamiseta:number, paraEstado:string){
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