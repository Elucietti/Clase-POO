//Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
//La funcionalidad de la clase debe ser:
//
//-    * Calcular el area
//-      Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
//-    * Determinar si es un cuadrado(si base y altura son iguales).
//-    * Determinar si esta acostado o parado(si el alto es mas que el ancho).
var Rectangulo = /** @class */ (function () {
    function Rectangulo(pBase, pAltura) {
        this.base = pBase;
        this.altura = pAltura;
    }
    Rectangulo.prototype.setBas = function (pBa) {
        this.base = pBa;
    };
    Rectangulo.prototype.nBas = function () {
        return this.base;
    };
    Rectangulo.prototype.setAlt = function (pAl) {
        this.altura = pAl;
    };
    Rectangulo.prototype.nAlt = function () {
        return this.altura;
    };
    Rectangulo.prototype.calcularArea = function () {
        var resultado = this.base * this.altura;
        return resultado;
    };
    Rectangulo.prototype.comparacionLados = function () {
        var cuadra = ' ';
        if (this.base == this.altura) {
            cuadra = "es un cuadrado";
        }
        else if (this.base > this.altura) {
            cuadra = "es un rectangulo y esta acostado";
        }
        else {
            cuadra = "es un rectangulo y esta parado";
        }
        return cuadra;
    };
    Rectangulo.prototype.comparacionMoM = function () {
        var mOm = 0;
        if (rectangulo1.calcularArea() == rectangulo2.calcularArea()) {
            mOm = 0;
        }
        else if (rectangulo1.calcularArea() < rectangulo2.calcularArea()) {
            mOm = -1;
        }
        else if (rectangulo1.calcularArea() > rectangulo2.calcularArea()) {
            mOm = 1;
        }
        return mOm;
    };
    return Rectangulo;
}());
var rectangulo1 = new Rectangulo(10, 6);
var rectangulo2 = new Rectangulo(7, 12);
var dato1 = rectangulo1.nBas();
var dato2 = rectangulo1.nAlt();
var area1 = rectangulo1.calcularArea();
var cuadrado1 = rectangulo1.comparacionLados();
var dato3 = rectangulo2.nBas();
var dato4 = rectangulo2.nAlt();
var area2 = rectangulo2.calcularArea();
var cuadrado2 = rectangulo2.comparacionLados();
var comparacion = rectangulo1.comparacionMoM();
console.log("Rectangulo N°1---- base: " + dato1 + "cm" + " altura: " + dato2 + "cm");
console.log("area rectangulo N°1: " + area1 + "cm2");
console.log("rectangulo N°1: " + cuadrado1);
console.log("Rectangulo N°2---- base: " + dato3 + "cm" + " altura: " + dato4 + "cm");
console.log("area rectangulo N°2: " + area2 + "cm2");
console.log("rectangulo N°2: " + cuadrado2);
console.log("resultado si es 1 rec1 es mayor, 0 es igual y -1 es menor: " + comparacion);
