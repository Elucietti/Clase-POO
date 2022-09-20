import { off } from "process";

class lavarropa{
        private encendido:boolean;
        private lavadoEcologico:number;
        private lavadoIntenso:number;
        private centrifugado:number;
        private consumo:boolean;
        private costo:number;
        private peso:number;

    constructor(parametroEncendido:boolean, parametroLavEco:number, parametroLavInt:number, parametroCentrifugado:number, parametroconsumo:boolean, parametrocosto:number,parametropeso:number){
        this.encendido=parametroEncendido;
        this.lavadoEcologico=parametroLavEco;
        this.lavadoIntenso=parametroLavInt;
        this.centrifugado=parametroCentrifugado;
        this.consumo=parametroconsumo;
        this.costo=parametrocosto;
        this.peso=parametropeso;
    }

    public estado():boolean{
        if(this.encendido===true){
            let on:boolean=this.encendido=false;
            return this.encendido;
        
        }else{
            let off:boolean = this.encendido=true;
            return this.encendido;
        }
    }

    public setLavEco(lavUsuario:number):void{
        this.lavadoEcologico=lavUsuario; 
    }

    public lavEco():number{
        return this.lavadoEcologico;
    }

    public setLavInt(lavUsuario2:number):void{
        this.lavadoIntenso=lavUsuario2;
    }

    public lavInt():number{
        return this.lavadoIntenso;
    }

    public setCentri(tiempoCentri:number):void{
        this.centrifugado=tiempoCentri;
    }

    public centri():number{
        return this.centrifugado;
    }

    public setConsumo(pconsumo:boolean){
        this.consumo=pconsumo;
    }

  
    public getconsumo():boolean{
        if(this.consumo===true){
            let eficiencia:boolean=this.consumo=false;
            return this.consumo;
        
        }else{
            let noEficiente:boolean = this.consumo=true;
            return this.consumo;
        }
    }

    public setBalance():number{
        let resultado:number=this.costo/this.peso;
        return resultado;
    }

    public setGama():string{
        let gama:string='';
        if(this.setBalance<3){
            gama="equipo de baja gama";
        
        }else{
            gama="equipo alta gama";
        }
        return gama;
    }

}

let lavDream = new lavarropa (true, 0, 0, 0,true,50000,120);

lavDream.estado();
let estados:boolean=lavDream.estado();

lavDream.setLavEco(30);
let tiempoEco:number=lavDream.lavEco();

lavDream.setLavInt(0);
let tiempoInt:number=lavDream.lavInt();

lavDream.setCentri(15);
let tiempoCentri:number=lavDream.centri();

lavDream.setConsumo();
let efi:boolean=lavDream.getconsumo();

lavDream.setBalance();
let balan:number=lavDream.setBalance()

lavDream.setGama();
let gam:string=lavDream.setGama();



console.log("encendido:  "+ estados);
console.log("tiempo lavado ecologico: "+ tiempoEco + " minutos");
console.log("tiempo lavado intenso: "+ tiempoInt + " minutos");
console.log("centrifugado: "+ tiempoCentri + " minutos");
console.log("equipo de bajo consumo: "+ efi);
console.log("balance: "+ balan);
console.log("tipo de equipo: "+ gam);

