const modelo = document.getElementById('modelo');

modelo.addEventListener ('mouseover' , function(){
    modelo.src = "img/fundocertovirado.webp";
});

modelo.addEventListener ('mouseout' , function(){
    modelo.src = "img/fundocerto.webp";
});