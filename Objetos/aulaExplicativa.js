/*exemplo de como é a estrutura de um objeto com uma função dentro dela.

const lele = {
    nome: 'lele' ,
    idade: 25
    descrever: function(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}')
    }
}

Para chamar um dos elementos que estão dentro do objeto fazer assim:

=> console.log(lele.nome) => consulta a const lele e o que esta dentro do objeto na variavel nome.

=> console.log(lele.idade) => consulta a const lele e o que esta dentro do objeto na variavel idade.

=> console.log(lele) => consulta o que esta dentro do objeto.

=> lele.altura = 1.70 => Para adicionar um elemento dentro do meu objeto.

=> delete lele.nome => vai deletar a variavel nome que está dentro do objeto lele.

=> this palavra reservada para assumir o objeto
*/


const lele = {
    nome:'Letícia souza' , /*virgula para separar um elemento de outro do meu objeto.*/
    idade: 15,
    descrever: function(){ /*adicionando uma função ao meu objeto no javascript*/
        console.log('Meu nome é ${this.pessoa} e minha idade é ${this.pessoa}');
    }
}

lele.descrever();

class pessoa {
    nome; 
    idade;
    anoDeNascimento;

    constructor(nome, idade){ /* usado pra dizer o que acontece quando uma "pessoa" é instanciada*/
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade
    }

    descrever(){
        console.log('meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const Letícia = new pessoa("Letícia", 15); /*adicionando um pessoa a minha classe*/
