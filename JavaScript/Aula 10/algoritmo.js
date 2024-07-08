let count = 0;
let number;

do {
    number = parseInt(prompt("Digite um número positivo (ou 0 para sair):"), 10);

    if (number > 100 && number < 200) {
        count++;
    }
} while (number !== 0);

alert("Você digitou " + count + " números entre 100 e 200.");