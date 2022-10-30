import { Animal } from "./Animal"; 
import { InterfaceMascota } from "./interfaceMascota";

export class Pez extends Animal implements InterfaceMascota{
    protected nombre:string;

     constructor(pPatas:number,pNombre:string,pJuega:string){
        super(pPatas);
        this.nombre=pNombre;    
    }
     public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNombre: string): void {
        this.nombre=pNombre;
    }
    public jugar(pNombre: string): void {
        console.log(pNombre + " esta jugando");
    }    
    public comer(): void {
        console.log("no esta comiendo");
    }
    public caminar(parametroPatas: number): void {
        this.nadar();
    }
    private nadar():void{
        console.log("esta nadando");
    }
    
}