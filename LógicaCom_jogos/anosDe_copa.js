function pulaLinha(){
    document.write("<br><br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}

var limite = parseInt(prompt("Entre com o ano limite"));
var anoCopa = 1930;

while(anoCopa <= limite){
    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}
