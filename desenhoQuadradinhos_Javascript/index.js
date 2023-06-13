function desenhaQuadrado(x, y, cor){
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d"); // a tela me da um pincel 2d

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = "black"; // selecionar a cor da borda.
    pincel.strokeRect(x, y, 50, 50); // coloca uma borda no desenho
}

/*var x = 0
while (x < 600) { 
                //x, y, "cor "
    desenhaQuadrado(x, 0, "green");
    x = x + 50; //50
}*/

for(var x = 0; x < 600; x = x + 50){
    desenhaQuadrado(x, 0, "green");
}








