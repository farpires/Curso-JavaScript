// $('#menu').html   - coloca solo ese elemento a la lista
// $('#menu').append -agrega un elemnto a la lista
// $('#menu').prepend -agrega un elemnto a la lista
// $('#menu').before - agrega un elemento fuera de la lista
//that.attr("href") es para colocar el nombre del link en html y para agregar atributos target blank es para que se abr una nueva pestaña
//each para recorrer el listado

$(document).ready(function(){ 
    reloadLinks();
    
  $('#add_button')
    .removeAttr('disabled') 
    .click(function(){
    $('#menu').before('<li><a href="'+$("#add_link").val()+'"></a><li>');
    $("#add_link").val('');
    reloadLinks();
  });



});

function reloadLinks(){
    $('a').each(function(index){
        var that=$(this);
        var enlace= that.attr("href");

        that.attr('target','blank');
        that.text(enlace);
    });
}