/*
    TypeScript: lenjuage con tipos estaticos que permiten detectar
    errores de asignacion en tiempo de desarrollo
*/

var num1 = 23
let num2 = 'rcr'
const num3= 34

let version:number=2.2 /*Asì se declara de tipo numerico*/

version=23

let nombre:string='Roberto' /*Asì se declara de tipo string*/

let activo:boolean=true /*Asì se declara de tipo boolean*/

let matricula:number|string|boolean=18002424 /* no es recomendable usarlo mucho pero si de ves en cuando y puede aceptar cualquier dato */

matricula='18002424Rob'

let vector:number[]=[1,2,3,4] /**/
vector1.push(10)
console.log(vector)

