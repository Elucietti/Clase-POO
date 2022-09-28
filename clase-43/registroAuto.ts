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
}
 
 class Auto{
    private marca:string;
    private modelo:string;
    private patente:string;
    
    constructor(paraMarca:string,paraModelo:string,paraPatente:string){    
        this.marca=paraMarca;
        this.modelo=paraModelo;
        this.patente=paraPatente;
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
}    
/*
class RegistroAutomotor{
    private listadoDeAutos: Auto[];
    
    constructor(paraArregloAutos:Auto[]){
        this.listadoDeAutos=paraArregloAutos;
    }

    public buscarAuto(paraAuto:Auto){
        let posicion=-1;
        for(let i:number=0;i<this.listadoDeAutos.length;i++){           
            if(paraAuto.getPatente()===this.listadoDeAutos[i].getPatente()){
                posicion=i;
            }
        }
        if(posicion===-1){
           console.log("el auto no esta registrado");     
        }else{
            console.log("el auto esta registrado en la posicion: " + posicion);
        }
    }

}

let autoSantino=new Auto("ford","focus","AAA123");
let autoEmanuel=new Auto("toyota","corolla","BBB123");
let autoMelina=new Auto("vw","gol","CCC123");

let autoBuscar=new Auto("bmw","x8","AAA124");


let ArrParaRegistrar:Auto[]=[autoSantino,autoEmanuel,autoMelina];
let resgistroAutomotorTdF=new RegistroAutomotor(ArrParaRegistrar);

let registrado=resgistroAutomotorTdF.consultarVehiculo(autoBuscar);

*/
let auto1=new Auto("ford","focus","AAA123");
let auto2=new Auto("toyota","corolla","BBB123");
let auto3=new Auto("vw","gol","CCC123");

let arregloDeAutos:Auto[]=[auto1,auto2,auto3];
let registroTDF:RegistroAutomotor=new RegistroAutomotor(arregloDeAutos);
let auto4:Auto=new Auto("toyota","hilux","SSS123");

let respuestaRecibida:boolean=registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida);

registroTDF.registrarVehiculo(auto4);

let respuestaRecibida2:boolean=registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida2);

console.log(arregloDeAutos.length);
console.log(arregloDeAutos);
