import { GestorDeLibros } from "./GestorDeLibros";
import { Libro } from "./Libro";


let libro1:Libro=new Libro("martin Fierro","Jose Hernandez","narrativo");
let libro2:Libro=new Libro("Ana Frank","Annelies Marie Frank","autobiografia");

let arregloDelibros:Libro[]=[libro1,libro2];
let gestorTdf:GestorDeLibros=new GestorDeLibros(arregloDelibros);

//busca libro3
let libro3:Libro=new Libro("don Segundo Sombra","ricardo guiraldes","novela");
let respuestaRecibida:boolean=gestorTdf.consultarLibro(libro3);
console.log(respuestaRecibida);

//registro el libro 3 y consulto si existe

gestorTdf.registrarLibro(libro3);
let respuestaRecibida2:boolean=gestorTdf.consultarLibro(libro3);
console.log(respuestaRecibida2);

console.log(arregloDelibros);



//elimino libro 3

gestorTdf.eliminarLibro(libro3);
let respuestaRecibida3:boolean=gestorTdf.consultarLibro(libro3);
console.log(respuestaRecibida3);

console.log(arregloDelibros);
