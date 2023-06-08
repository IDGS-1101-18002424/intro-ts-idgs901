function sumar(a:number,b:number):void{
    console.log(a+b)
}
let num=sumar(3,5)


console.log(num)

function sumar2(a:number,b:number):number{
    return a+b
}

function operasBas(n1:number,n2?:number,n3:number=2):number{
    let tem=n1*n3
    return tem
}

console.log(operasBas(3,5,5))

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; /*Funcion flecha/anonima que no regresa nada :D*/
}

function calcularEdad(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota)
}

const nuevaMascota:Mascota={
    nombre:"Miau",
    edad:3,
    mostrarEdad() {
        console.log('La edad es:', this.edad)
    }
}
calcularEdad(nuevaMascota,2)

/*es aquella que tiene nombre, se define pero no tiene nombre*/
const fucSumar=function(n1:number,n2:number):number{
    return n1+n2
}
console.log(fucSumar(4,9))