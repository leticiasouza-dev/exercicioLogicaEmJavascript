function pulaLinha(){
    document.write("<br><br>");
}

function mostra(calculo){
    document.write(calculo);
    pulaLinha()
}


var qualTabuada = prompt("Digite qual a tabuada que gostaria de ver (de 0 a 10)");
mostra("Tabuada do " + qualTabuada);

for(var multiplicador = 1; multiplicador <= 10; multiplicador++){
    mostra(qualTabuada * multiplicador);
}

mostra("fim");



