import { Persona } from "./Persona";

export abstract class Cuenta{
    protected NumeroCuenta:number;
    protected Saldo:number;
    protected Cliente:Persona;

    constructor(pNumero:number,pCliente:Persona){
        this.NumeroCuenta=pNumero;
        this.Cliente=pCliente;
    }

    abstract Retirar():number;
    abstract ActualizarSaldo():number;


}