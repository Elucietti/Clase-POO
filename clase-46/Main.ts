import { Gestor } from "./Gestor";
import { Libro } from "./Libro";

let bibloteca=new Gestor("Bibloteca");

let libro_1=new Libro("harry potter 1","J.K Rowling","fantasia");
let libro_2=new Libro("harry potter 2","J.K Rowling","fantasia");
let libro_3=new Libro("harry potter 3","J.K Rowling","fantasia");
let libro_4=new Libro("sherlock holmes","arthur conan doyle","misterio");
let libro_5=new Libro("el señor de los anillos","J.R.R tolkien","fantasia");
let libro_6=new Libro("cien años de soledad","gabriel gracia marquez","novela");

bibloteca.insertarLibro(libro_1);
bibloteca.insertarLibro(libro_2);
bibloteca.insertarLibro(libro_3);
bibloteca.insertarLibro(libro_4);
bibloteca.insertarLibro(libro_5);

console.log(bibloteca.toString());
