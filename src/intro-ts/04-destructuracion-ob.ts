console.log ('04- Destrucuracion')
interface Alumnos1{
    matricula:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumnos1={
    matricula:18002424,
    nombre:'Roberto',
    edad:23,
    correo:'18002424@alumnos.utleon.edu.mx',
    grupo:{
        grupo:'IDGS 901',
        year:2023
    }
}
console.log(`La matricula es: ${alumno2.matricula}`)
console.log(`El nombre del alumno es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)

console.log ('Termina proceso')
console.log ('Inicia otro proceso')

const{matricula,nombre:nom,grupo:xx}=alumno2
const{grupo,year:anio}=xx

console.log(`La matricula es: ${matricula}`)
console.log(`El nombre del alumno es: ${nom}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El año del grupo es: ${anio}`)

console.log ('Termina proceso')

//Destructuracion de arreglos
console.log ('Inicia Destructuracion de arreglos')

const gps:string[]=['IDGS','IEVN','IRDG'];
console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)

console.log ('Destructuracion de arreglos A y B')
const[a,b]=gps;
console.log(`Grupo 1: ${a}`)

