//PRIMER PASO, comprobar si el documento esta listo = se utiliza el $(document) luego se utiliza ready que ES UNEVENTO y tiene
//una funcion de CALback
$(document).ready(function(){


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//SELECTOR ID 
//propiedad (clave, valor)
$("#rojo").css("background","red")
                   .css("color", "white");
$("#amarillo").css("background","yellow")
                            .css("color","green");
$("#verde").css("background","green")
                     .css("color","white");



//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//SELECTOR DE CLASE
//tambien se puede utilizar metodos d Eventos Ejemplo-Evento-click tiene una funcion de calbackque va a pasar que cuando de click a cualquier 
//de esos elementos ,A ESE elemento que le e dado click le puedo colocar estilo css
var mi_clase=$('.zebra').css("padding","5px");
  
$('.sin_border').click(function(){
//$(this).css("border","5px dashed black");
$(this).addClass('zebra');
});



//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


// SELECTOR DE ETIQUETA 
// practicamente igual que las clases pero selectionamos la etiqueta
//selecionamos todos los parrafo
var parrafos = $('p').css("cursor","pointer");

parrafos.click(function(){
    //para ser mas rapido acedemos al doom solo una ves para el this, y usemos comilla simple mucho mejor 
    var thisSpeed=$(this);
    //hasClass= busca en la etiqueta si tiene la clase zebra    
    if(!thisSpeed.hasClass('grandes')){
      //  $(this).removeClass("zebra");
      thisSpeed.addClass('grandes');
    }else{
        thisSpeed.removeClass('grandes');
    }
});

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//SELECTORES POR ATRIBUTOS
//Como se hace esto utlizando los corchetes
$('[title="Google"]').css('background','#ccc');
$('[title="Facebook"]').css('background','yellow');
$('[title="Gmail"]').css('background','green');


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//OTROS= FIND y PARENT
//unis dos etiquetas sin quieres tener las misma caracteristicas.logo
//los elementos de caja ,si no se exactamente a donde estan , o simplemente quieros encontrarlos 
//$('p, a').addClass('margin-superior');


//metodo find, es para buscar en un arbol de html muy grande para buscar etiqueta o para buscar algo que no sabemos exactamente a donde esta
//var busqueda=$("#caja").find('.resaltado');

//parent es para saltar cajas   

var busqueda=$("#elemento2").parent().parent().find('.resaltado');


console.log(busqueda);



});



















//una clase es cuando necesitamos seleccionar muchos elementos o darle una propiredad comunes o estilo comunes a muchos etiquetas
//idem es un identificado unico , de una t=etiqueta, darle un stilo concreto .. 
