function sorteia(){
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade){
    var segredos = [];
    var numero = 1;
     while(numero <= quantidade){
            var numeroAleatorio = sorteia();

            if(numeroAleatorio !== 0){
                var achou = false

                for(var posicao = 0; posicao < segredos.length; posicao++){

                    if (segredos[posicao] == numeroAleatorio) {
                        achou = true;
                        break;
                    }
                }


                if (achou == false){
                    segredos.push(sorteia);
                    numero++;
                }
            }
        }
    return segredos;
}   

       

// push usado para adicionar valor a uma array (um por um). usado também para gerar um numero de cada vez.
//gerando um numero aleatório com array
var segredos = [sorteiaNumeros(3)]; 

//var segredo = Math.round(Math.random() * 10); //sorteia um numero aleatório de 0 a 10.
var input = document.querySelector("input");  
input.focus();

function verifica(){   // verifica se o usuário acertou ou errou.
    var achou = false;
    for(var posicao = 0; posicao < segredos.length; posicao++){
        
        if(input.value == segredos[posicao]){
            alert("VOCÊS ACERTOU!");
            achou = true
            break;
        }
    }

    if(achou == false){
        alert("VOCÊ ERROU!")
    }
    
    input.value =" ";
    input.focus();
}

var button = document.querySelector("button");   
button.onclick = verifica;  //button.onclick recebe as funcionalidades do verifica.

