import { Persona } from "./Persona";

export abstract class Cuenta{
    protected NumeroCuenta:number;
    protected Saldo:number;
    protected Cliente:Persona;

    public constructor(pCliente:Persona,pCuenta:number,pSaldo:number){
        this.NumeroCuenta=pCuenta;
        this.Cliente=pCliente;  
        this.Saldo=0;
    }
    public GetNuCuenta():number{
        return this.NumeroCuenta;
    }

    public setNumeroCuenta(paNuCuenta:number):void{
        this.NumeroCuenta=paNuCuenta;
    }

    public getCliente():Persona{
        return this.Cliente;
    }

    public setCliente(paCliente:Persona):void{
        this.Cliente=paCliente;
    }

    public getSaldo():number{
        return this.Saldo;
    }

    public setSaldo(paSaldo:number):void{
        this.Saldo=paSaldo;
    }

    public Ingresar(paramIngresar:number):void{
        this.Saldo=this.Saldo+paramIngresar;
    }


    abstract Retirar(paraRetiro:number):void;
    abstract ActualizarSaldo():void;


}