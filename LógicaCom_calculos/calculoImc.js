function pulaLinha(){
    document.write("<br><br>");
}

function mostra(calculo){
    document.write(calculo);
    pulaLinha()
}

function calculaImc(altura, peso){
    return peso / (altura * altura);
}

var nome = prompt("informe seu nome");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc(alturaInformada,pesoInformado);
mostra(nome + ", o seu IMC é " + imc);

if(imc < 18.5) {
    mostra("Vc está a baixo do peso, se cuide");
}

if(imc >= 18.5  && imc <= 35) {
    mostra("Vc está no peso ideal, parabéns continue se cuidando");
}

if(imc > 35){
    mostra("vc está acima do peso procure um medico para se cuidar");
}