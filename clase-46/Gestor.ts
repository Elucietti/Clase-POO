import { Libro } from "./Libro";

export class Gestor{
    private libros=new Array<Libro>;
    private nombre:string;

    constructor(pNombre:string,){
        this.nombre=pNombre
    }

    esVacio():boolean{
        if(this.libros.length==0)
           return true;
        return false;    
    }

    cantidadLibros():number{
        return  this.libros.length
    }

    insertarLibro(pLibro:Libro){
        this.libros.push(pLibro);
    }

    getLibros():Array<Libro>{
        return this.libros;
    }

    toString():string{
        let resultado:string="";
        for(let index:number=0; index<this.cantidadLibros();index++){
            resultado+=this.libros[index].toString()+'\n\n';
        }
        return resultado;
    }

    consultarLibro(titulo:boolean){
        return true;
    }
    
    modificarGestor(paNombre:string){

    }

    modificarLibro(titulo:string){

    }

    eliminarLibro(titulo:string){

    }
}