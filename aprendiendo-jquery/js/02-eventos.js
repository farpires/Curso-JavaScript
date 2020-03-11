$(Document).ready(function(){
//Los Primeros Eventos que vamos a ver MouseOver y MouseOut 
//para JavaScrip
var caja = $("#caja");

/*caja.mouseover(function(){
    $(this).css("background","red");
});

caja.mouseout(function(){
    $(this).css("background","green");
});
*/


function cambiaRojo(){
    $(this).css("background","red");
}
function cambiaVerde(){
    $(this).css("background","green");
}



//Hover 
//utilizamos JQuery

caja.hover(cambiaRojo,cambiaVerde)

// Click, Doble click 

caja.click(function(){  
 $(this).css("background","blue")
       .css("color","white");
});

caja.dblclick(function(){  
    $(this).css("background","pink")
          .css("color","yellow");
});


//Focus y blur 
//esto no sirve para hacer una accion cuando hacemos foco en el html, y cuanod no hacemos focos en el html
var nombre = $("#nombre");
var datos = $("#datos");

nombre.focus(function(){
   $(this).css("border","2px solid green");
});

nombre.blur(function(){
    $(this).css("border","2px solid transparent");
    datos.text($(this).val()).show(); 
});

//Mousedown y mouseup
//nos permite que es capturar cuando preciono una TECLA del Raton que cuando la suelto 
datos.mousedown(function(){
$(this).css("border-color","gray");
});

datos.mouseup(function(){
    $(this).css("border-color","black");
});

//Mousemove
$(document).mousemove(function(){

var sigueme=$("#sigueme");
$('body').css("cursor","none");
/*console.log("En X:"+event.clientX);
console.log("En Y:"+event.clientY);*/
sigueme.css("left",event.clientX);
sigueme.css("top",event.clientY);
});



});




