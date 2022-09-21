 
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

}
