function pulaLinha(){
    document.write("<br><br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}

//function sorteio(){
    //return Math.round(Math.random() * 10);
//}
//var numeroPensado = sorteio();
var numeroPensado = Math.round(Math.random() * 10);
var tentativas = 1;

while(tentativas <= 3) {
    
    var chute = parseInt(prompt("Digite seu chute!"));

    if(chute == numeroPensado){
        mostra("Você acertou!");
        break;
    }

    else{
        mostra("você errou!");
    }
    tentativas++;
}











//if(chute > numeroPensado){
   // mostra(" o numero que você chutou é maior que o numero pensado ");
//}

//else {
  // mostra("o número que você chutou é menor que o numero pensado");
//}