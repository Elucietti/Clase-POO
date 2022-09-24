import { BlobOptions } from "buffer";

class Pava{
    private encendido:boolean;
    private calentando:number;
    private calenTexto:string;


   constructor(PEncendido:boolean, pCalentando:number,pCalenTexto:string){
        this.encendido=PEncendido;
        this.calentando=pCalentando;
        this.calenTexto=pCalenTexto;
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
    public getTexto():string{
        return this.calenTexto;
    }
    public setTexto():string{
        let pTexto:string;
        if(this.calentando<75){
            pTexto='El agua esta para el mate';
        }else{
            pTexto='El agua esta hervida';
        }
        return pTexto;
    }

}

let pava = new Pava(true,73,"mate");

console.log("Encendido:  " + pava.getEncendido());
console.log("Temperatura del agua: "+pava.getCalentando()+" °")
console.log(pava.setTexto());

