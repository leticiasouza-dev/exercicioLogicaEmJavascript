function pulaLinha(){
    document.write("<br><br>");
}

function mostra(calculo){
    document.write(calculo);
    pulaLinha()
}

var vitorias = parseInt(prompt("Entre com o numero de vitórias."));
var empates = parseInt(prompt("Entre com o número de empates."));

var pontos = (vitorias * 3) + empates;

mostra("os pontos do seu time é " + pontos);

if (pontos > 28){
    mostra("Seu time está melhor do que o ano passado.");
}

if (pontos < 28) {
    mostra("Seu time está pior do que o ano passado.");
}

if (pontos == 28){
    mostra("Seu time está igual ao ano passado.");
}
