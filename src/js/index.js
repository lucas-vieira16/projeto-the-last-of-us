/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente;

PASSOS: 

Passo 1 - dar um jeito de pegar o elemento HTML dos botões; 

Passo 2 - dar um jeito de identificar o clique do usuario; 

Passo 3 - desmarcar o botão selecionado anteriormente; 

Passo 4 - marcar o botão clicando como se estevisse selicionado;

Passo 5 - esconder a imagem ativa de fundo anterior 

Passo 6 - fazer aparecer a imagem correspondente ao botão clicado;

*/

const botoesCarrosel = document.querySelectorAll('.botao');
const imagensCarrosel = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => { 

       desativarBotaoSelecionado();
       
       selecionarBotaoCarrosel(botao);

       esconderImagemAtiva(); 

       mostrarImagensdeFundo(indice);
       
    })
})

function mostrarImagensdeFundo(indice) {
    imagensCarrosel[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
