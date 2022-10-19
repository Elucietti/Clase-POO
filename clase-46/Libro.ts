export class Libro{
   private titulo:string;
   private autor:string;
   private genero:string;

    constructor(ptitulo:string,pAutor:string,pGenero?:string){
        this.titulo=ptitulo;
        this.autor=pAutor;
        if(pGenero != undefined)
            this.genero=pGenero;
    }

    getTitulo():string{
        return this.titulo;
    }
    getAutor():string{
        return this.autor;
    }
    getGenero():string{
        if(this.genero!=undefined)
            return this.genero;
        return "";    
    }
    toString():string{
        return 'Titulo: '+this.titulo+'- Autor: '+this.autor+'- Genero: '+this.genero;
    }
}