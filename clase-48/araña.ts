import { Animal } from "./Animal";

export class Araña extends Animal{

    constructor(paPatas:number){
        super(paPatas);
    }
    public comer(): void {
        console.log("esta comiendo");
    }
    public caminar(parametroPatas: number): void {
        console.log("esta caminando con "+parametroPatas+" patas");
    }
    
}