//crear un tipo de datos 
type alfanumerico =string |number;
let cadena2: alfanumerico='fabioArpiresweb.es';
//string
let cadena: string | number="fabioarpiresweb.es";
cadena=15;
console.log(cadena);
//number
let number: number = 12;
//boolean
let  verdadero_falso: boolean=true;
//any
let cualquiera: any = "hola";
    cualquiera=75;
//array
var lenguajes: Array<string> = ['pahp','js','css'];
let years: any[]=['DOCE',13,14];

//let vs Var en TS
var numero1 = 10;
var numero2 = 12;
if(numero1 == 10){
    var numero1=44;
    var numero2=55;
    console.log(numero1, numero2);
} 
console.log(numero1, numero2);

console.log(cadena,number,verdadero_falso,cualquiera,lenguajes,years);
