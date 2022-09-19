//Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
//La funcionalidad de la clase debe ser:
//
//-     Calcular el area
//-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
//-     Determinar si es un cuadrado(si base y altura son iguales).
//-     Determinar si esta acostado o parado(si el alto es mas que el ancho).
var rectangulo = /** @class */ (function () {
    function rectangulo(pBase, pAltura) {
        this.base = pBase;
        this.altura = pAltura;
    }
    rectangulo.prototype.setAreaBas = function (pBa) {
        this.base = pBa;
    };
    rectangulo.prototype.setAreaAlt = function (pAl) {
        this.altura = pAl;
    };
    rectangulo.prototype.nAreab = function () {
        return this.base;
    };
    rectangulo.prototype.nAreaA = function () {
        return this.altura;
    };
    return rectangulo;
}());
var rectangulo1 = new rectangulo(10, 6);
var rectangulo2 = new rectangulo(8, 5);
rectangulo1.setAreaBas(10);
var datoRec1 = rectangulo1.nAreab();
rectangulo1.setAreaAlt(6);
var datoRec2 = rectangulo1.nAreaA();
rectangulo2.setAreaBas(7);
var datRec1 = rectangulo2.nAreab();
rectangulo2.setAreaAlt(12);
var datRec2 = rectangulo2.nAreaA();
var area1 = datoRec1 * datoRec2;
var area2 = datRec1 * datRec2;
console.log("Rectangulo N°1---- base: " + datoRec1 + " altura: " + datoRec2);
console.log("area rectangulo N°1: " + area1);
console.log("Rectangulo N°2-----base: " + datRec1 + " altura: " + datRec2);
console.log("area rectangulo N°: " + area2);
