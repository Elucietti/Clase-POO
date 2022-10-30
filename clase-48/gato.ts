import { Animal } from "./Animal"; 
import { InterfaceMascota } from "./interfaceMascota";

export class Gato extends Animal implements InterfaceMascota{
    private nombre:string;
    private juega:string;

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
        console.log("esta comiendo");
    }
    public caminar(parametroPatas: number): void {
        console.log("esta caminando en "+parametroPatas+" patas");
    }
    
}