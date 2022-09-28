"use strict";
exports.__esModule = true;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(parametroListado) {
        this.listadoDeAutos = parametroListado;
    }
    RegistroAutomotor.prototype.consultarVehiculo = function (parametroAuto) {
        var respuesta = false;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === parametroAuto.getPatente()) {
                respuesta = true;
            }
        }
        return respuesta;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (parametroAuto) {
        this.listadoDeAutos.push(parametroAuto);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (parametroAuto) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === parametroAuto.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.editarVehiculo = function (posicion, pPat, pMar) {
        this.listadoDeAutos[posicion].setPatente(pPat);
        this.listadoDeAutos[posicion].setMarca(pMar);
    };
    return RegistroAutomotor;
}());
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
/*
class RegistroAutomotor{
    private listadoDeAutos: Auto[];
    
    constructor(paraArregloAutos:Auto[]){
        this.listadoDeAutos=paraArregloAutos;
    }

    public buscarAuto(paraAuto:Auto){
        let posicion=-1;
        for(let i:number=0;i<this.listadoDeAutos.length;i++){
            if(paraAuto.getPatente()===this.listadoDeAutos[i].getPatente()){
                posicion=i;
            }
        }
        if(posicion===-1){
           console.log("el auto no esta registrado");
        }else{
            console.log("el auto esta registrado en la posicion: " + posicion);
        }
    }

}

let autoSantino=new Auto("ford","focus","AAA123");
let autoEmanuel=new Auto("toyota","corolla","BBB123");
let autoMelina=new Auto("vw","gol","CCC123");

let autoBuscar=new Auto("bmw","x8","AAA124");


let ArrParaRegistrar:Auto[]=[autoSantino,autoEmanuel,autoMelina];
let resgistroAutomotorTdF=new RegistroAutomotor(ArrParaRegistrar);

let registrado=resgistroAutomotorTdF.consultarVehiculo(autoBuscar);

*/
var auto1 = new Auto("ford", "focus", "AAA123");
var auto2 = new Auto("toyota", "corolla", "BBB123");
var auto3 = new Auto("vw", "gol", "CCC123");
var arregloDeAutos = [auto1, auto2, auto3];
var registroTDF = new RegistroAutomotor(arregloDeAutos);
var auto4 = new Auto("toyota", "hilux", "SSS123");
var respuestaRecibida = registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida);
registroTDF.registrarVehiculo(auto4);
var respuestaRecibida2 = registroTDF.consultarVehiculo(auto4);
console.log(respuestaRecibida2);
console.log(arregloDeAutos.length);
console.log(arregloDeAutos);
