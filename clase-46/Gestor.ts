import { Libro } from "./Libro";

export class Gestor{
    private libros=new Array<Libro>;
    private nombre:string;

    constructor(pNombre:string,libros?:Array<Libro>){
        this.nombre=pNombre;
        if(libros!=undefined)
            this.libros=libros; 
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
        let nuevoArreglo=new Array <Libro>;
        for (let index:number=0;index<this.cantidadLibros();index++){
            let titulos=this.libros[index].getTitulo();
            let autor=this.libros[index].getAutor();
            let genero=this.libros[index].getGenero();
            let nuevoLibro=new Libro(titulos,autor,genero);
            nuevoArreglo.push(this.libros[index]);
        
        }
        return this.libros; 
       }

    toString():string{
        let resultado:string="";
        for(let index:number=0; index<this.cantidadLibros();index++){
            resultado+=this.libros[index].toString()+'\n\n';
        }
        return resultado;
    }

    consultarLibro(titulo:string):boolean{
        let respuesta:boolean=false;
        for(let index:number=0;index<this.cantidadLibros();index++){
            if(this.libros[index].getTitulo()==titulo)
                return true;
        }
        return false 
    }
    
    modificarGestor(paNombre:string){
        this.nombre=paNombre;

    }

    modificarLibro(titulo:string){
        let pos:number=-1;
        for(let index:number=0;index<this.cantidadLibros();index++){
        if(this.libros[index].getTitulo()==titulo)
                pos=index;
        }
        this.libros[pos].setNombre(titulo);
    }

    eliminarLibro(titulo:string){
        let pos:number=-1;
        for(let index:number=0;index<this.cantidadLibros();index++){
        if(this.libros[index].getTitulo()==titulo)
                pos=index;

    } 
    if(pos>-1)
        this.libros.splice(pos,1);
}
}