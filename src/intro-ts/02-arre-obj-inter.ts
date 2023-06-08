

let vector1:Array<number>=[9,7,8,6]
vector1.push(10)
vector1[1]=22
for(let tem of vector1)
    console.log(tem)


let tem:(number|string)[]=[]
tem.push('Robert')
tem.push(123)

interface Alumno{
    matricula?:number; /* si le pones un signo de ? a final de la variable es que puede usarlo o no*/
    nombre:string;
    edad:number;
    email:string;
}

const alumno:Alumno={
    matricula:18002424,
    nombre:'Bassrob',
    edad:24,
    email:'bassrob@gmail.com'
}

console.table(alumno)