import {Punto} from './Punto';

class Recta{
    private puntoInicial:Punto;
    private puntoFinal:Punto;

    constructor(puntoInicial:Punto,puntoFinal:Punto){
        this.puntoInicial=puntoInicial;
        this.puntoFinal=puntoFinal;
    }

    get_puntoInicial():Punto{
        return this.puntoInicial;
    }

    set_puntoInicial(punto:Punto){
        this.puntoInicial=punto;
    }

    get_puntoFinal():Punto{
        return this.puntoFinal;
    }

    set_puntoFinal(punto:Punto){
        this.puntoFinal=punto;
    }
    largo():number{
       let x1:number=this.puntoInicial.get_x();
       let y1:number=this.puntoInicial.get_y();
              
       let x2:number=this.puntoFinal.get_x();
       let y2:number=this.puntoFinal.get_y();
       
       let aux1:number=x2-x1;
       aux1=aux1*aux1;

       let aux2:number=y2-y1;
       aux2=aux2*aux2;

       return Math.sqrt(aux1+aux2);
    }

    sentido():string{
        return "algun lado";
    }
}