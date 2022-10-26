import { Cuenta } from "./Cuenta";
import { CuentaAhorro } from "./CuentaAhorro";
import { CuentaCorriente } from "./CuentaCorriente";
import { Persona } from "./Persona";




let persona1:Persona=new Persona("Emanuel","Lucietti",32768353);
let Cuentaahorro1:CuentaAhorro=new CuentaAhorro(persona1,123456,2000);
let CuentaCorriente1:CuentaCorriente=new CuentaCorriente(persona1,456789,5000);

Cuentaahorro1.Ingresar(4000);
Cuentaahorro1.setInteres(1);
Cuentaahorro1.ActualizarSaldo();
let saldo1:number=Cuentaahorro1.getSaldo();
console.log("saldo: "+saldo1);
let retiro1=Cuentaahorro1.Retirar(13000);
console.log(retiro1);
