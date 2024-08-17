function displayWelcomeMessage() {

    const nome = prompt("Digite seu nome:");


    const mensagem = (nome && nome.trim() !== "") ? `Bem-vindo, ${nome}!` : "Bem-vindo, visitante!";


    document.getElementById('welcomeMessage').textContent = mensagem;
}


window.onload = displayWelcomeMessage;