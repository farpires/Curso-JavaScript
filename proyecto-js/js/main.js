//1-AHORA UTILIZAREMOS EL Plugin Qque acabamos de instalar bxslider, en nuestro fichero main.js
//2-Listado de Post alamcenado en un Json y mostrar dinamicamente 
$(document).ready(function () {
    //  alert('hola a qui estoy ');
    //
    //slider
    if (location.href.indexOf('index') > -1) { //aqui se da esta condicion para que se aplique solo cuando es INDEX.HTML
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }
    //post
    //array de json
    if (location.href.indexOf('index') > -1) { //aqui se da esta condicion para que se aplique solo cuando es INDEX.HTML

        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'publicado el dia: ' + moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia, quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit Quia eius, dolor autem dolorem offi quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natu sapiente ipsa. Voluptatum, voluptates.',
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia, quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit Quia eius, dolor autem dolorem offi quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natu sapiente ipsa. Voluptatum, voluptates.',
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia, quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit Quia eius, dolor autem dolorem offi quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natu sapiente ipsa. Voluptatum, voluptates.',
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia, quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit Quia eius, dolor autem dolorem offi quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natu sapiente ipsa. Voluptatum, voluptates.',
            },
            {
                title: 'Prueba de titulo 5',
                date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia, quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit Quia eius, dolor autem dolorem offi quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natu sapiente ipsa. Voluptatum, voluptates.',
            },
        ];


        posts.forEach((item, index) => {
            var post = `
            <div class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
            </div>
            `;
            $("#posts").append(post);

        });
    }

    //selector de Tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    //scroll arriba de la web
    $('.subir').click(function () {
        e.preventDefault();
        $('html, body').animate({
            scrolltop: 0
        }, 1500);
        return false;
    });

    //LOGIN FALSO
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido," + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'><p>Cerrar seccion<p></a>")
        $("#login").hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });

    }
    //ACORDEON
    if (location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();

    }
    //RELOJ
    if (location.href.indexOf('reloj') > -1) {

        setInterval(function () {//permite cambiar automaticamente lo que desee
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);

    }
    //validacion
    if (location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        }); 

        $.validate({
            lang: 'es',
            //personalizar o dar mas detalles de los erores:"CUANDO HACEMOS SUMIT , NOS LLEVARA ARRIBA Y CON DETALLES DEL ERROR"
            errorMessagePosition: 'top', //desir que se fuera arriba
            scrolltopTopOnError: true,
        });
    }

/*
    if (location.href.indexOf('contact') > -1) {
        $ . validar ({
            lang : 'es' 
          });
    }*/





});
