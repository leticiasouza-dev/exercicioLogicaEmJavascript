/*Faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis. Sendo elas:
 1 - preço do combustivel;
 2 - Gasto médio de combustivel do carro por KM;
 3 - Distancia em KM de viagem.

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.*/

const precoCombustivel = 5.79;
const KmPorlitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / KmPorlitros;
const  valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
