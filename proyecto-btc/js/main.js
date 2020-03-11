//1-AHORA UTILIZAREMOS EL Plugin Qque acabamos de instalar bxslider, en nuestro fichero main.js
//2-Listado de Post alamcenado en un Json y mostrar dinamicamente 
$(document).ready(function () {
    //  alert('hola a qui estoy ');

    //slider

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //post
    //array de json
    var posts = [
        {
            title: 'Lanzando Bitcoin durante las vacaciones',
            date: 'publicado el dia: ' + moment().format("MMMM Do YYYY"),
            content: '¡Es esa época del año otra vez! Cuando no puede decidir si desea obtener una especia de calabaza o un latte con sabor a ponche de huevo, y su centro comercial local apesta a canela, agujas de pino y dinero fiduciario sucio. Los HODLdays son un momento para amigos, familiares y regalos, pero como buenos Bitcoiners, ya sabemos que el mejor regalo de todos es Bitcoin. Pero, ¿cómo convencer a sus amigos y familiares de que vayan por el conejo de Bitcoin, eh, agujero de renos? El espacio de Bitcoin ha madurado mucho en los últimos años y, como resultado, dar bitcoin es más fácil que nunca. Solía ​​ser difícil dar bitcoins a la gente sin preocuparse de que perderían sus claves privadas o algo peor ... ¡vender el BTC por un shitcoin centralizado! Podría nombrar soltar algunas de esas monedas de mierda ahora, pero en el espíritu de las vacaciones ... realmente joder. XRP. Eso es lo que quise escribir. Lo dije. ¡Toma eso, Brad Garlinghouse!',
        },
        {
            title: 'Nuestros 10 podcasts favoritos de la revista Bitcoin de 2019',
            date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'El podcast de la revista Bitcoin: reclamando privacidad con Jameson Lopp, El podcast de la revista Bitcoin: ¿Qué hace que Bitcoin sea seguro con Dan Held?, El podcast de la revista Bitcoin: cómo es ser John McAfee, El podcast de la revista Bitcoin: creación de la serie animada Bitcoin y amigos con Robert Allen, Bits semanales: Gab, QuadrigaCX y el nuevo impuesto criptográfico, Bits semanales: viviendo en Bitcoin en Europa, Podcast de la revista Bitcoin: comprensión del análisis de blockchain con Philip Gradwell, Hora feliz de Bitcoin: minería, uso (incorrecto) y medios, ¿Qué está disminuyendo ?: Consumo de energía de Bitcoin, Bitcoin en Asia: los primeros días de Bitcoin en Asia',
        }, {
            title: 'BITCOIN 2020 Un evento anual para la comunidad de Bitcoin ',
            date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Bitcoin 2020 regresará a San Francisco, esta vez con más asistentes, más diversión y más Bitcoin. ¡No pierdas la oportunidad de unirte a nosotros! #ItsHalvening',
        }, {
            title: 'Prueba de titulo 4',
            date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eius, dolor autem dolorem officia, quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natus sapiente ipsa. Voluptatum, voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit Quia eius, dolor autem dolorem offi quaerat quos velit odio repellendus iusto iste molestiae consequuntur doloremque iure natu sapiente ipsa. Voluptatum, voluptates.',
        },
        {
            title: 'Podcast: economista jefe de Chainalysis sobre los datos detrás de Blockchain Forensics',
            date: 'publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: '"Ha sido un año de éxito, pero algo que no se habla lo suficiente en criptomonedas es lo que se necesita para construir un negocio", dijo Philip Gradwell, economista jefe de la firma forense de blockchain Chainalysis, en el último episodio del Podcast de la revista Bitcoin . "Proporcionamos software para el cumplimiento y las investigaciones, pero debajo de todo, somos una empresa de datos que trata de entender cómo fluye el valor entre diferentes entidades. Eso se parece a la provisión de información - Bloomberg. Pero, es difícil encontrar una comparación de lo que lo hacemos en el mundo tradicional porque las cadenas de bloques permiten nuevos tipos de análisis que antes no eran posibles ".',
        },
    ];


    posts.forEach((item, index) => {
        var post =`
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


    var theme= $("#theme");
 
    //selector de Tema
    $("#to-btc").click(function(){
        theme.attr("href","css/btc.css");
        logo.attr()
    });

    $("#to-eth").click(function(){
        theme.attr("href","css/eth.css");
    });

    $("#to-usdt").click(function(){
        theme.attr("href","css/usdt.css");
    });

});


