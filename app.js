//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


// Função para alterar o conteúdo de qualquer elemento baseado no seletor
function exibirTextoNaTela(seletor, mensagem){
    let elemento = document.querySelector(seletor);
    if (elemento) {
        elemento.textContent = mensagem; // Modifica o texto do elemento
    }
}


// Função para atualizar a lista de amigos na tela
function exibirAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos'); // Seleciona a lista <ul>
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar novos amigos

    // Percorre o array de amigos e adiciona cada nome à lista
    amigos.forEach(function(amigo) {
        let item = document.createElement('li'); // Cria um item de lista <li>
        item.textContent = amigo; // Define o texto do item como o nome do amigo
        listaAmigos.appendChild(item); // Adiciona o item à lista
    });
}

// Função para sortear os amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        exibirTextoNaTela('h2', 'Precisa de pelo menos 2 amigos para o sorteio.');
        return;
    }

    // Embaralha o array de amigos
    let amigosSorteados = [...amigos];
    amigosSorteados = amigosSorteados.sort(() => Math.random() - 0.5);

    // Exibe o resultado do sorteio
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = ""; // Limpa os resultados anteriores

    // Atribui um amigo secreto a cada um
    amigos.forEach((amigo, index) => {
        let amigoSorteado = amigosSorteados[index === amigos.length - 1 ? 0 : index + 1]; // Garante que ninguém seja seu próprio amigo secreto
        let itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigo} tirou ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    });

    exibirTextoNaTela('h2', 'Sorteio realizado com sucesso!');
}


// Função chamada quando o botão de adicionar amigo é clicado
function adicionarAmigo() {
    let nome = document.querySelector('.input-name').value;

    // Se o campo de input estiver vazio, exibe a mensagem no <h2>
    if (nome === ""){
        exibirTextoNaTela('h2', 'Por favor, insira um nome');
    } else {
        amigos.push(nome); // Adiciona o nome à lista de amigos
        console.log(amigos); // Mostra o array no console de depuração
        exibirAmigos();

        // Limpa o campo de entrada, definindo o valor como string vazia
        document.querySelector('#amigo').value = ""; // Redefine o campo de entrada para vazio pelo id
    }
}

