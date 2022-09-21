var Auto = /** @class */ (function () {
    function Auto(paraMarca, paraModelo, paraPatente) {
        this.marca = paraMarca;
        this.modelo = paraModelo;
        this.patente = paraPatente;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (pPatente) {
        this.patente = pPatente;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(paraArregloAutos) {
        this.listadoDeAutos = paraArregloAutos;
    }
    RegistroAutomotor.prototype.buscarAuto = function (paraAuto) {
        var posicion = -1;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (paraAuto.getPatente() === this.listadoDeAutos[i].getPatente()) {
                posicion = i;
            }
        }
        if (posicion === -1) {
            console.log("el auto no esta registrado");
        }
        else {
            console.log("el auto esta registrado en la posicion: " + posicion);
        }
    };
    return RegistroAutomotor;
}());
var autoSantino = new Auto("ford", "focus", "AAA123");
var autoEmanuel = new Auto("toyota", "corolla", "BBB123");
var autoMelina = new Auto("vw", "gol", "CCC123");
var autoBuscar = new Auto("bmw", "x8", "AAA124");
var ArrParaRegistrar = [autoSantino, autoEmanuel, autoMelina];
var resgistroAutomotorTdF = new RegistroAutomotor(ArrParaRegistrar);
var registrado = resgistroAutomotorTdF.buscarAuto(autoBuscar);
console.log(ArrParaRegistrar);
