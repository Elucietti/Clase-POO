import {Libro} from './Libro'

export class GestorDeLibros{
  public listadoDeLibros:Libro[];

  constructor(pListado:Libro[]){
        this.listadoDeLibros=pListado;
  }  

  consultarLibro(pLibro:Libro):boolean{
    let respuesta:boolean=false;
    let posicion=-1;
    for(let i:number=0;i<this.listadoDeLibros.length;i++){
        if(this.listadoDeLibros[i].getNombre()===pLibro.getNombre()){
            posicion=i;
            respuesta=true;
        }
    }
    return respuesta;
  }

  registrarLibro(pAuto:Libro):void{
    this.listadoDeLibros.push(pAuto);
  }

  eliminarLibro(pAuto:Libro):void{
    for(let i:number=0;i<this.listadoDeLibros.length;i++){
        if(this.listadoDeLibros[i].getNombre()===pAuto.getNombre()){
            this.listadoDeLibros.splice(i,1); 
        }
    }
  }
}