//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function exibirAlerta() {
   exibirAlertaNaTela('input-name', 'Por favor, insira um nome.');
}

function verificarNome() {
    let nome = document.querySelector('input-name').value;

    if (nome = [] ) {
        exibirAlertaNaTela('input-name', 'Por Favor, insira um nome.')
    }
}