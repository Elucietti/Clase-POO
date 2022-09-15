class Pava{
    //atributos o estados
    encendido:boolean;
    calentando:number;
    hirviendo:number;

   
//funcionalidades

constructor(encendido:boolean, calentando:number, hirviendo:number){
    this.encendido=true;
    this.calentando=calentando;
    this.hirviendo=hirviendo;


}


funcionando(){

    console.log("luz indicadora");
}

mate(){

    console.log("calentando a 75° ");
}

cafe(){
    console.log("agua hervida");
  }
} 

let pava = new Pava(true, 74, 100 );
pava.funcionando();
pava.mate();
console.log("temperatura del agua " + pava.calentando + "°");
console.log("temperatura del agua " + pava.hirviendo + "°")
    