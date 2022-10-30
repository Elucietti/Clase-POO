
export abstract class Animal{
    protected patas:number;

    constructor(pPatas:number){
        this.patas=pPatas;
    }

    public getintPatas():number{
        return this.patas;
    }

    public setintPatas(paPatas:number):void{
        this.patas=paPatas;
    }

    abstract comer():void;
    abstract caminar(parametroPatas:number):void;
}