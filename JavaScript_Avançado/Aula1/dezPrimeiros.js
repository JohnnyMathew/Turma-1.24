document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("minhaLista");

    const valores = [
        "Primeiro item",
        "Segundo item",
        "Terceiro item",
        "Quarto item",
        "Quinto item",
        "Sexto item",
        "Sétimo item",
        "Oitavo item",
        "Nono item",
        "Décimo item"
    ];

    valores.forEach((valor, index) => {
        const item = document.createElement("li");
        item.textContent = valor;

        // Modifica a cor de fundo de forma alternada
        if (index % 2 === 0) {
            item.style.backgroundColor = "#f0f0f0"; // Cor clara
        } else {
            item.style.backgroundColor = "#c0c0c0"; // Cor escura
        }

        lista.appendChild(item);
    });
});