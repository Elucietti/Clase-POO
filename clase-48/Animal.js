"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pPatas) {
        this.patas = pPatas;
    }
    Animal.prototype.getintPatas = function () {
        return this.patas;
    };
    Animal.prototype.setintPatas = function (paPatas) {
        this.patas = paPatas;
    };
    return Animal;
}());
exports.Animal = Animal;
