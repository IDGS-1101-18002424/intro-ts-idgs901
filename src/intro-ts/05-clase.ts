console.log ('Inicia 05-Clases')
console.log ('Inicia Persona 2')
class Persona2{
    nombre:string ='2';
    edad:number=2;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}

let persona:Persona2;
persona=new Persona2('Roberto',24)
persona.imprimir();

console.log ('Inicia dados')

class Dado{
    private valor:number=0;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Valor: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();

console.log ('Inicia Persona 3')
class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}

let persona3:Persona3;
persona3=new Persona3('Roberto',24)
persona3.imprimir()