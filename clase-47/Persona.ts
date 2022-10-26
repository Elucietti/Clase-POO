import { Cuenta } from "./Cuenta";

export class Persona{
    protected nombre:string;
    protected apellido:string;
    protected Dni:number;


constructor(paraNombre:string,paraApellido:string,paraDni:number){
    this.nombre=paraNombre;
    this.apellido=paraApellido;
    this.Dni=paraDni;
}

public setNombre(paraNombre:string):void{
    this.nombre=paraNombre;
}

public setApellido(paraApellido:string):void{
    this.apellido=paraApellido;
}

public setDni(pdni:number){
    this.Dni=pdni;
}

public getNombre():string{
    return this.nombre;
}

public getApellido():string{
    return this.apellido;
}

public getDni():number{
    return this.Dni;
}
}

