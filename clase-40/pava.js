var Pava = /** @class */ (function () {
    //funcionalidades
    function Pava(encendido, calentando, hirviendo) {
        this.encendido = true;
        this.calentando = calentando;
        this.hirviendo = hirviendo;
    }
    Pava.prototype.funcionando = function () {
        console.log("luz indicadora");
    };
    Pava.prototype.mate = function () {
        console.log("calentando a 75° ");
    };
    Pava.prototype.cafe = function () {
        console.log("agua hervida");
    };
    return Pava;
}());
var pava = new Pava(true, 74, 100);
pava.funcionando();
pava.mate();
console.log("temperatura del agua " + pava.calentando + "°");
console.log("temperatura del agua " + pava.hirviendo + "°");
