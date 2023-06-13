/* Faça um programa para calcular o valor de um uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustivel que está no seu carro;
 4 - Gasto médio de combustiveldo carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será Gasto para realizar esta viagem.  */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const KmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if(tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}  else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

let nome = prompt('qual seu nome ?')





