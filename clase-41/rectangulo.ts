//Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
//La funcionalidad de la clase debe ser:
//
//-     Calcular el area
//-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
//-     Determinar si es un cuadrado(si base y altura son iguales).
//-     Determinar si esta acostado o parado(si el alto es mas que el ancho).

class rectangulo{
    private base:number;
    private altura:number;
  

    constructor(pBase:number,pAltura:number,){
        this.base=pBase;
        this.altura=pAltura;
       
    }

    public setAreaBas(pBa:number){
       this.base=pBa;
       
    }

    public setAreaAlt(pAl:number){
        this.altura=pAl;
    }

    public nAreab():number{
        return this.base;

    }

    public nAreaA():number{
        return this.altura;

    }
    
}

let rectangulo1=new rectangulo(10,6);
let rectangulo2=new rectangulo(8,5);

rectangulo1.setAreaBas(10);
let datoRec1:number=rectangulo1.nAreab();
rectangulo1.setAreaAlt(6);
let datoRec2:number=rectangulo1.nAreaA();

rectangulo2.setAreaBas(7);
let datRec1:number=rectangulo2.nAreab();
rectangulo2.setAreaAlt(12);
let datRec2:number=rectangulo2.nAreaA();

let area1:number=datoRec1*datoRec2;
let area2:number=datRec1*datRec2;

console.log("Rectangulo N°1---- base: " + datoRec1 + " altura: " + datoRec2 );
console.log("area rectangulo N°1: "+ area1);

console.log("Rectangulo N°2-----base: " + datRec1 + " altura: " + datRec2);
console.log("area rectangulo N°: "+ area2);
