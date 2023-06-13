/* 
    3) Elabore um algoritmo que calcule o que deve  ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - Á vista no dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço nomrsl de etiqueta mais juros de 10%

*/

const precoEtiqueta = 100;
const condicaoPagamento = 4;

if(condicaoPagamento === 1){
    const valorAPagar = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log('O valor a pagar é ' + valorAPagar);
} else if(condicaoPagamento === 2){
    const valorAPagar = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log('O valor a pagar é ' + valorAPagar);
}  else if (condicaoPagamento === 3){
    const valorAPagar = precoEtiqueta;
    console.log('o valor a pagar é ' + valorAPagar);
} else{
    const valorAPagar = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log('O  valor a pagar é ' + valorAPagar);
}

