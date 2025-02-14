// Array para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um amigo à lista.
 * A função verifica se o nome é válido antes de adicionar.
 */
function adicionarAmigo() {
    // Obtém o valor do input de nome
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Valida se o nome não está vazio e se contém apenas letras e espaços
    if (nome !== "" && nome.match(/^[a-zA-ZÀ-ÿ\s]+$/)) {
        // Adiciona o nome ao array amigos
        amigos.push(nome);
        console.log(`Amigo adicionado: ${nome}`); // Log para depuração

        // Cria um novo item de lista (li) com o nome do amigo
        let lista = document.getElementById("listaAmigos");
        let item = document.createElement("li");

        // Adiciona o nome do amigo ao item de lista
        item.textContent = nome;

        // Adiciona o item à lista HTML
        lista.appendChild(item);

        // Limpa o campo de input após adicionar o amigo
        input.value = "";

    } else {
        // Se o nome for inválido, exibe uma mensagem de erro
        alert("Por favor, digite um nome válido!");
        console.log("Nome inválido:", nome); // Log para depuração
    }
}

/**
 * Função para sortear um amigo da lista.
 * Ao sortear, o amigo sorteado é removido da lista.
 */
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há nomes para sortear");
        console.log("Nenhum amigo na lista para sortear"); // Log para depuração
        return;
    }

    // Sorteia um amigo aleatório
    let i = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[i];

    // Exclui a pessoa sorteada do array para que não seja sorteada novamente
    amigos.splice(i, 1); // Remove o nome sorteado do array
    console.log(`Amigo sorteado: ${nomeSorteado}`); // Log para depuração

    // Atualiza o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa qualquer resultado anterior

    // Cria um item de lista para exibir o resultado
    let itemResultado = document.createElement("li");
    itemResultado.textContent = `O amigo sorteado é ${nomeSorteado}`;
    resultado.appendChild(itemResultado);

    // Se todos os amigos forem sorteados, exibe uma mensagem e reinicia o jogo
    if (amigos.length === 0) {
        alert("Todos os amigos foram sorteados!");
        console.log("Todos os amigos foram sorteados"); // Log para depuração
    }
}

/**
 * Função para reiniciar o jogo.
 * Limpa tanto a lista de amigos quanto o resultado.
 */
function reiniciarJogo() {
    // Limpa o array de amigos
    amigos = [];
    console.log("Jogo reiniciado. Lista de amigos limpa."); // Log para depuração

    // Limpa a lista de amigos exibida na tela
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Limpa o resultado do sorteio exibido na tela
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
}

// Adicionando funcionalidade para a tecla "Enter" no campo de input
document.getElementById("amigo").addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada foi "Enter"
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão da tecla Enter
        adicionarAmigo(); // Chama a função para adicionar o nome
        console.log("Tecla Enter pressionada, amigo adicionado"); // Log para depuração
    }
});
