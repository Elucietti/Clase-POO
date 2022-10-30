import { Animal } from "./Animal";
import { Araña } from "./araña";
import { Gato } from "./gato";
import { Pez } from "./pez";

export class ListadoDeAnimales{
    private listaDeAnimales = new Array<Animal>;

    constructor(paraListado:Animal[]){
        this.listaDeAnimales=paraListado;
    }

    public buscar(animal:Animal):boolean{
        let posicion:boolean=false;
        for(let i:number=0;i<=this.listaDeAnimales.length;i++){
            if(this.listaDeAnimales[i]===animal){
                posicion=true;
            }
            
        }
        return posicion;
    }
    public agregarAnimal(animal:Animal):void{
        this.listaDeAnimales.push(animal);
    }
    public removerAnimal(animal:Animal):void{
        for(let i:number=0;i<=this.listaDeAnimales.length;i++){
            if(this.listaDeAnimales[i]===animal){
                this.listaDeAnimales.splice(i,1);
            }

    }
    
    }
}