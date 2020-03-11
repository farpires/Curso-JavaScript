

//utilizaremos los metodo hide=oculatr show = mostrar
//efecto fast  $("#caja").show('fast');      normal  $("#caja").hide('normal'); slow 
//Metodo fundido mostrar=fadeIn Oculta=fadeOut    $("#caja").fadeIn('normal');     $("#caja").fadeOut('slow');
//Metodo fadeTo nos permite que valla de un estado a otro con opacidad Ejemplo 
//***** Mostrar= $("#caja").fadeTo('slow',0.8); */
//*****ocultar =   $("#caja").fadeTo('slow',0.2);*/ por medio de la opacidad se va desapareciendo
//Metodo toggle es para mostrar ir abrir cuando se precion el boton      $("#caja").toggle('fast');
// Metodo fadeToggle es Idem al anterio pero ccon otro efecto
// Metodo slideToggle es idem pero con el efecto de desplegado 
//*-*-*-*-*-
//Metodo slideUp para Ocultar
//Metodo slideDown para Mostrar 
//************************************ */
//Metodo animate
$(document).ready(function(){

var caja = $("#caja");

    //alert('000');
$("#mostrar").hide();

$("#mostrar").click(function(){
    $(this).hide();
    $("#ocultar").show();
    caja.slideDown('slow');
});

$("#ocultar").click(function(){
    $(this).hide();
    $("#mostrar").show();
    caja.slideUp('slow',function(){
        console.log("cartel ocultado");
    });
    
});

$("#todoenuno").click(function(){
    caja.slideToggle('fast');
});



$("#animar").click(function(){
    caja.animate({
                    marginLeft:'500px',
                    fontSize: '40px',
                    height: '100px',

                },'slow')
        .animate({
                    borderRadius:'900px',
                    marginTop:'80px',
                 },'slow')
        .animate({
                    borderRadius:'0px',
                    marginleft:'0px',
                },'slow')
        .animate({
                    borderRadius:'100px',
                    marginTop:'0px',
                },'slow')         
                 ;
});


}); 