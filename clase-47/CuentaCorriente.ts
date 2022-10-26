import { Cuenta } from "./Cuenta"
import { Persona } from "./Persona";

export class CuentaCorriente extends Cuenta{

    constructor(pcliente:Persona,pNcuenta:number,pSaldo:number){
        super(pcliente,pNcuenta,pSaldo);

    }


   Retirar(ParaRetiro:number):void{
       if(this.Saldo>ParaRetiro){
        this.Saldo=this.Saldo+ParaRetiro;
       }else{
        console.log("saldo insuficiente");
       }

   }
    ActualizarSaldo():void{
        this.Saldo=this.Saldo * 1.5;
    }    
}




