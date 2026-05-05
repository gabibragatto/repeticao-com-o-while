let number = Number(prompt("Digite um número positivo:"));

while (number < 0) {
    number = Number(prompt("Número inválido, digite outro número:"));
}
alert (`Número válido! ${number}`);