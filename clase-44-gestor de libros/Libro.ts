
export class Libro{
    private nombre:string;
    private autor:string;
    private genero:string;

    constructor(pNombre:string,pAutor:string,pGenero:string){

        this.nombre=pNombre;
        this.autor=pAutor;
        this.genero=pGenero;
    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre=nombre;
    }

    getAutor():string{
        return this.autor;
    }

    setAutor(autor:string){
        this.autor=autor;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(genero:string){
        this.genero=genero;
    }

    toString():string{
        return 'Nombre del libro: '+this.nombre+' Autor: '+this.autor+' Genero literario: '+this.genero
    }
}