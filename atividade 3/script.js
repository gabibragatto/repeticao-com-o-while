let total = 0;

let valor = Number(prompt("Digite o valor da compra: (0 para finalizar)"));

while (valor !== 0){
    total += valor;

    valor = Number(prompt("Digite outro valor: (0 para finalizar)"));
}
alert ("Total da compra: R$" + total);