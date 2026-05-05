let saldo = 1000;

while (saldo > 0) {

    let saque = parseFloat(prompt("Saldo atual: R$ " + saldo + 
    "\nDigite o valor do saque:"));

    while (saque > saldo || saque <= 0 || isNaN(saque)) {
        saque = parseFloat(prompt("Valor inválido ou saldo insuficiente!\nDigite outro valor:"));
    }

    saldo -= saque;

    alert("Saque realizado! Saldo restante: R$ " + saldo);
}

alert("Saldo zerado ou negativo. Encerrando sistema.");