import { BlobOptions } from "buffer";

class Pava{
    
    private encendido:boolean;
    private calentando:number;


   constructor(PEncendido:boolean, pCalentando:number,){
        this.encendido=PEncendido;
        this.calentando=pCalentando;
        
   }

    public getEncendido():boolean{
        return this.encendido;
    }

    public setEncendido(estado:boolean){
        let resultado:boolean;
        if(this.encendido==true){
            resultado=this.encendido;
        }else{
            resultado=this.encendido;
        }
        return resultado;
    }
    public getCalentando():number{
        return this.calentando;
    }
    public setCalentando(mate:number){
        let resultado:number=0;
        if(this.calentando<75){
            resultado=this.calentando;
        }else{
            resultado=this.calentando;
        }
        return resultado;
    }

        


}

let pava = new Pava(true,73);

console.log("estado de la pava:  " + pava.setEncendido);


