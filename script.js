var csss = [
    {boton: "fa-solid fa-moon", css: "estilos.css"},
    {boton: "fa-solid fa-sun", css: "estilos2.css"}
];
document.getElementById('botondia').onclick = function () {
    var data = csss.reverse()[0];
    document.getElementById('css').href= data.css;
    document.getElementById('botondia').classList= data.boton;
}

