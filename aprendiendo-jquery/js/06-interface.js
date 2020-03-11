 //con el UI va a daler movimiento a las cajas
 $(document).ready(function(){
     //MOVER
     //mover elemento por pagina 
     $('.elemento').draggable();
     //REDIMENCIONAR
     //poder redimencionar , para eso tenemos que incluir los estilo de JqueryUI
     $('.elemento').resizable();
    //SELECCIONAR ELEMENTOS 
    //hacer una lista cullo elementos sean redimensionable.
    //con el metodo selectable podemos organizar la lista
    
    /*///////////////////$(".lista-selecionable").selectable();////////////////////*/

    //SELECIONAR Y ORDENAR ELEMENTO 
    $(".lista-selecionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    //DROP
$("#elemento-movido").draggable(); //draggable para poder moverlo sobre la area
    $("#area").droppable({
        drop: function(){
            console.log("has soltado dentro del area ")
        }
    });// permite colocar un elemento en interio


    //EFECTOS
    //metodo 
    // fade: es el mas comun   - -fadeToggle();
    // explode:tipo explosion, tenemos que utilizar un metodo intemedio ya sea toggle o effect---effect("explode"); o  toggle("explode");
    // blind o slide : aparese de izq  a derec o arriba  abajo ---.toggle("blind");----.toggle("slide");
    //fold muesra de derecha a abajo ---toggle("fold");
    //puff 
    //scale este esta muy bien 
    // shake

    // se pueden agregar opciones , tiempo
    //TIEMPO: toggle("shake",4000);
    //OPCIONES:toggle("shake",{AQUI SE AGREGA OPCINES YA SEAN ALTURA TAMANO ETC},4000);  
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake",4000);
    }); 

    //Tooltips es como un pequeno podpac
    $(document).tooltip();
    //Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });
    //Datepiker 
    $("#calendario").datepicker();
    //Tabs
    $("#pestanas").tabs();


 });