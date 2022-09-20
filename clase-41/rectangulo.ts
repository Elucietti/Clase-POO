//Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
//La funcionalidad de la clase debe ser:
//
//-    * Calcular el area
//-      Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
//-    * Determinar si es un cuadrado(si base y altura son iguales).
//-    * Determinar si esta acostado o parado(si el alto es mas que el ancho).

class Rectangulo{
    private base:number;
    private altura:number;
    private Area:number;
   
    constructor(pBase:number,pAltura:number,){
        this.base=pBase;
        this.altura=pAltura;
    }

    public setBas(pBa:number){
       this.base=pBa;
       
    }
    public nBas():number{
        return this.base;
    }
    
    public setAlt(pAl:number){
        this.altura=pAl;
    }

    public nAlt():number{
        return this.altura;

    }

    public calcularArea():number{
        let resultado:number=this.base*this.altura;
        return resultado;
    }

    public comparacionLados():string{
        let cuadra:string = ' ';
        if(this.base==this.altura){
            cuadra="es un cuadrado";
            
        }else if(this.base>this.altura){
            cuadra="es un rectangulo y esta acostado";
        
        }else{
            cuadra="es un rectangulo y esta parado";
        }
        return cuadra;
    }

    public comparacionMoM(rectangulo1:number,rectangulo2:number){
        let mOm:number=0;
        if(this.calcularArea()==this.calcularArea()){
            mOm=0;
        }else if(this.calcularArea()<this.calcularArea()){
            mOm=-1;
        }else if(this.calcularArea()>this.calcularArea()){
            mOm=1;
        }
        return mOm;  
    }
}

let rectangulo1=new Rectangulo(10,6);
let rectangulo2=new Rectangulo(7,12);

let dato1:number=rectangulo1.nBas();
let dato2:number=rectangulo1.nAlt();
let area1:number=rectangulo1.calcularArea();
let cuadrado1:string=rectangulo1.comparacionLados();

let dato3:number=rectangulo2.nBas();
let dato4:number=rectangulo2.nAlt();
let area2:number=rectangulo2.calcularArea();
let cuadrado2:string=rectangulo2.comparacionLados();

let comparacion:number=rectangulo1.comparacionMoM(area1,area2);

console.log("Rectangulo N°1---- base: " + dato1+ "cm"+ " altura: " + dato2+"cm" );
console.log("area rectangulo N°1: "+ area1+"cm2");
console.log("rectangulo N°1: " + cuadrado1);

console.log("Rectangulo N°2---- base: " + dato3+"cm" + " altura: " + dato4+"cm" );
console.log("area rectangulo N°2: "+ area2+"cm2");
console.log("rectangulo N°2: " + cuadrado2);

console.log("resultado si es 1 rec1 es mayor, 0 es igual y -1 es menor: " + comparacion );
