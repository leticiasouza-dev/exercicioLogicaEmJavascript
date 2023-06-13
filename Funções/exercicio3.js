/* faça uma função para saber se você é maior de idade*/

function maiorDeIdade(anoNascimento, anoAtual){
    if((anoAtual - anoNascimento) >= 18){
        return "Você é maior de idade";
    } else {
        return "Você é menor de idade";
    }
        
}
console.log(maiorDeIdade(2007, 2023));

/* ou 
function verificaIdade(idade){
    if(idade >= 18){
        return "Você é maior de idade";
    } else{
        return "Você é menor de idade";
    }
}
*/