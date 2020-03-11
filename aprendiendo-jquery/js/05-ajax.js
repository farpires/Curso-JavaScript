//Metodo Loand
//este metodo nos permite hacer una peticion ajax por get y 
//incruustar el resultado dentro de un div o de cualquier etiqueta 

//Get y Post : ya sabes que en el protocolo http tenemos varios metodos el get post put delete ...
//Jquery usamos get y post 
//get:
//post creat nos permite enviar un usuario y crear su registro...Objetos va por canales distintos que el get en este caso
//se crea un varibale usuario
$(document).ready(function(){

//load
//$("#datos").load("https://reqres.in/");
//Get y Post 

$.get("https://reqres.in/api/users",{page: 2},function(response){
response.data.forEach((element,index)=>{
    $("#datos").append("<p>"+element.first_name+"-"+element.last_name+"</p>");
});
});

/*
    var usuario={
        name:"Arpires Fabio",
        web:"ArpiresFabioweb.es"
        }
        
        $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
        });
*/
//($(this).attr("action") de esta manera recoje del html la URL
/*
 $.ajax({
        type:'POST',
        dataType: 'json'                                   ///////muchas veces estos datos no son necesarios 
        contentType= en que formate viajan lso datos ////////////muchas veces estos datos no son necesarios 
        url= es la direccion que vamos hacer la peticion
        data: el objeto que les voy a enviar en este casoUSUARIO
        METODO
        beforeSend:lo que hace es que antes que lo envie hagan una accion,
          succes: es en el caso que todo ande correcto 
          error: si a ocurrido un error 
          timeOut: cuanto quiere uno que tarde la peticion 
    });
*/

$("#formulario").submit(function(e){
e.preventDefault();

    var usuario={
        name:$('input[name="name"]').val(),
        web:$('input[name="web"]').val(),
    };
        /*
        $.post($(this).attr("action"), usuario, function(response){
        console.log(response);
        }).done(function(){
            alert("usuario correctamaente ");
        });*/
    $.ajax({
        type:'POST',
        url:$(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando Usuario")
        },
        success: function(response){
            console.log(response);
        },
        error: function(){
            console.log("a ocurrido un error");
        },
        timeout: 558,

    });

});
return false;



});