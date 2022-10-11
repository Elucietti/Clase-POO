
export class Libro{
    private nombre:string;
    private autor:string;
    private editorial:string;

    constructor(pNombre:string,pAutor:string,pEditorial:string){

        this.nombre=pNombre;
        this.autor=pAutor;
        this.editorial=pEditorial;
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

    getEditorial():string{
        return this.editorial;
    }

    setEditorial(editorial:string){
        this.editorial=editorial;
    }
}