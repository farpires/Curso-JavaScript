const bicileta ={
    color:'rojo',
    modelo:'BMX',
    frenos:'De disco',
    velocidadMaxima: '60km',
    cambiarcolor: function(nuevo_color){
        // bicileta.color= nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
};

bicileta.cambiarcolor("Azul");

// console.log(bicileta);