console.log('prueba');
//contype puedo controlar los tipos de datos que entran y salen de mi funciones
function getnumrto(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es :" + numero;
}
console.log(getnumrto(55));
