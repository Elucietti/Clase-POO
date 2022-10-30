import { Animal } from "./Animal";
import { Araña } from "./araña";
import { Gato } from "./gato";
import { ListadoDeAnimales } from "./listaDeAnimales";
import { Pez } from "./pez";

let animal1:Gato=new Gato(4,"michi","esta jugando");
let animal2:Araña=new Araña(8);
let animal3:Pez=new Pez(0,"nemo","no esta jugando");
let animal4:Gato=new Gato(4,"pepe","no esta jusgando",);

let arregloAnimales:Animal[]=[animal1,animal2,animal3];

let listadoA:ListadoDeAnimales=new ListadoDeAnimales(arregloAnimales);
let respuesta:boolean=listadoA.buscar(animal4);
console.log(respuesta);

listadoA.agregarAnimal(animal4);
let respuesta2:boolean=listadoA.buscar(animal4);
console.log(respuesta2);

listadoA.removerAnimal(animal2);
let respuesta3:boolean=listadoA.buscar(animal2);
console.log(respuesta3);

console.log(listadoA)