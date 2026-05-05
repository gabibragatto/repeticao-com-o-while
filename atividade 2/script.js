let soma = 0;
let quantidade = 0;

let nota = Number(prompt("Digite uma nota: (negativo para parar)"));

while (nota >= 0){
    soma += nota;
    quantidade ++;

    nota = Number(prompt("Digite outra nota: (negativo para parar)"));
}

if (quantidade > 0) {
    let média = soma / quantidade;
    alert("Média das notas: " + média);
} else {
    alert("Nenhuma nota inválida foi inserida")
}