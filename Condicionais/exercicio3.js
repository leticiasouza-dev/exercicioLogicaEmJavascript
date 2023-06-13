/* 
    2) O IMC - indice de Massa Corporal é um critério da Organização Mundial de saúde para dar uma indicação sobre a 
    condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura) 

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a atabela abaixo.

    IMC em adulto Condição:
     - Abaixo de 18.5 Abaixo do peso;
     - Entre 18.5 e 25 peso normal;
     - Entre 25 e 30 Acima do peso;
     - Entre 30 e 40 Obeso;
     - Acima de 40 Obsidade Grave;
*/

const peso = 90;
const altura = 1.97;
const imc= peso / (altura * altura);

if(imc < 18.5){
    console.log('Abaixo do peso');
} else if(imc >= 18.5 && imc <= 25){
    console.log('está no peso normal');
} else if(imc >= 25 && imc <= 30){
    console.log('está acima do peso');
} else if(imc >= 30 && imc <= 40){
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}