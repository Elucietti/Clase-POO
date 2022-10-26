import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";

export class CuentaAhorro extends Cuenta{
    protected SaldoMinimo:number;
    protected interes:number;

    constructor(pCliente:Persona,pNcuenta:number,pSaldo:number){
        super(pCliente,pNcuenta,pSaldo);
    }

    public setSaldoMinimo(paraSaldo:number):void{
        this.Saldo=paraSaldo;
    }
    public getSaldoMinimo():number{
        return this.SaldoMinimo;
    }
    public setInteres(pInteres:number):void{
        this.interes=pInteres;
    }
    public getInteres():number{
        return this.interes
    }

    Retirar(paraRetiro: number): void {
        let saldoActual=this.Saldo-this.SaldoMinimo;
        if(saldoActual>paraRetiro){
            this.Saldo=this.Saldo-paraRetiro;
        }else{
            console.log("saldo insuficiente");
        }
    }


    ActualizarSaldo(): void {
        this.Saldo=this.Saldo*this.interes;
    }

}
