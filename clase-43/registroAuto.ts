import { timeStamp } from "console";

class RegistroAutomotor{
    public listadoDeAutos:Auto[];

    constructor(parametroListado:Auto[]){
        this.listadoDeAutos=parametroListado;
    }

    consultarVehiculo(parametroAuto):boolean{
        let respuesta:boolean=false;
        for(let i:number=0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente()===parametroAuto.getPatente()){
                respuesta=true;
            }
        }
        return respuesta;
    }

    registrarVehiculo(parametroAuto):void{
        this.listadoDeAutos.push(parametroAuto);
    }

    eliminarVehiculo(parametroAuto:Auto):void{
        for(let i:number=0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente()===parametroAuto.getPatente()){
                this.listadoDeAutos.splice(i,1);
            }
        }
    }

    editarVehiculo(posicion:number,pPat:string,pMar:string):void{
    
        this.listadoDeAutos[posicion].setPatente(pPat);
        this.listadoDeAutos[posicion].setMarca(pMar);
    }

    editarTitular(posicion:number,pTitu:string):void{
        this.listadoDeAutos[posicion].setTitular(pTitu);
    }
}
 
class Auto{
    private marca:string;
    private modelo:string;
    private patente:string;
    private titular:string;

    
    constructor(paraMarca:string,paraModelo:string,paraPatente:string,paraTitular:string){    
        this.marca=paraMarca;
        this.modelo=paraModelo;
        this.patente=paraPatente;
        this.titular=paraTitular;
    }    

    public getMarca():string{
        return this.marca;
    }

    public setMarca(pMarca:string):void{
        this.marca=pMarca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(pModelo:string):void{
        this.modelo=pModelo;
    }

    public getPatente():string{
        return this.patente;
    }

    public setPatente(pPatente:string):void{
        this.patente=pPatente;
    }

    public getTitular():string{
        return this.titular;
    }

    public setTitular(paraTitulo:string):void{
        this.titular=paraTitulo;
    }
}    

let auto1=new Auto("ford","focus","AAA123","Emanuel");
let auto2=new Auto("toyota","corolla","BBB123","Santino");
let auto3=new Auto("vw","gol","CCC123","Ignacio");

let arregloDeAutos:Auto[]=[auto1,auto2,auto3];
let registroTDF:RegistroAutomotor=new RegistroAutomotor(arregloDeAutos);
let auto4:Auto=new Auto("toyota","hilux","SSS123","agustina");

let respuestaRecibida:boolean=registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida);

registroTDF.registrarVehiculo(auto4);

let respuestaRecibida2:boolean=registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida2);

console.log(arregloDeAutos.length);
console.log(auto3);

//cambio de titular
registroTDF.editarTitular(2,"frida");
console.log(auto3);


