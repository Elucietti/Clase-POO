import { EquipoMedico } from "./EquipoMedico";
import { EquipoTecnico } from "./EquipoTecnico";
import { Jugador } from "./Jugador";

export class Persona{
   protected nombre:string;
   protected apellido:String;
   protected nPasaporte:number;
   protected fechaDeNacimiento:number;

    constructor(parametroNombre:string,parametroApellido:string,parametroPasaporte:number,parametroFecha:number){
        this.nombre=parametroNombre;
        this.apellido=parametroApellido;
        this.nPasaporte=parametroPasaporte;
        this.fechaDeNacimiento=parametroFecha;
    }

    public getNombre():string{
      return this.nombre;

    }
    public setNombre(pNombre:string){
        this.nombre=pNombre;
    }

    public getApellido():String{
        return this.apellido;
    }

    public setApellido(pApellido:string){
        this.apellido=pApellido;
    }

    public getPasaporte():number{
        return this.nPasaporte;
    }
    public setPasaporte(pPasaporte:number):void{
        this.nPasaporte=pPasaporte;
    }
    public getFecha():number{
        return this.fechaDeNacimiento;
    }
    public setFecha(pfecha:number):void{
        this.fechaDeNacimiento=pfecha;
    }

}

