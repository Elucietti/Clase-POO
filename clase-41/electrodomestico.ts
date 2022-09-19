import { off } from "process";

class lavarropa{
    private encendido:boolean;
    private lavadoEcologico:number;
    private lavadoIntenso:number;
    private centrifugado:number;

constructor(parametroEncendido:boolean, parametroLavEco:number, parametroLavInt:number, parametroCentrifugado:number){
    this.encendido=parametroEncendido;
    this.lavadoEcologico=parametroLavEco;
    this.lavadoIntenso=parametroLavInt;
    this.centrifugado=parametroCentrifugado;
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
    this.centrifugado=tiempoCentri
}

public centri():number{
    return this.centrifugado;
}

}

let lavDream = new lavarropa (true, 0, 0, 0);

lavDream.estado();
let estados:boolean=lavDream.estado();

lavDream.setLavEco(30);
let tiempoEco:number=lavDream.lavEco();

lavDream.setLavInt(0);
let tiempoInt:number=lavDream.lavInt();

lavDream.setCentri(15);
let tiempoCentri:number=lavDream.centri();



console.log("encendido:  "+ estados);
console.log("tiempo lavado ecologico: "+ tiempoEco + " minutos");
console.log("tiempo lavado intenso: "+ tiempoInt + " minutos");
console.log("centrifugado: "+ tiempoCentri + " minutos");


