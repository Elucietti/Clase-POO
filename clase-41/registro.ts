 
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

let registrado=resgistroAutomotorTdF.buscarAuto(autoBuscar);


 
