
const botoesMenu = document.querySelectorAll('.botao');
const blocosInformacoes = document.querySelectorAll('.bloco');

botoesMenu.forEach((botao, indice) => {

    botao.addEventListener('click', () => {

        desmarcarBotaoAnterior();
        marcarBotaoClicado(botao);

        desativarBlocoAnterior();
        ativarBlocoDoBotao(indice);

    })
})

function desmarcarBotaoAnterior(){
    const botaoSelecionado = document.querySelector('.marcado');
    botaoSelecionado.classList.remove('marcado');
}

function marcarBotaoClicado(botao){
    botao.classList.add('marcado');
}

function desativarBlocoAnterior(){
    const blocoAtivo = document.querySelector('.ativo');
    blocoAtivo.classList.remove('ativo');
}

function ativarBlocoDoBotao(indice){
    blocosInformacoes[indice].classList.add('ativo');
}





const botoesMais = document.querySelectorAll('.mais');

botoesMais.forEach((mais, indice) => {

    mais.addEventListener('click', () => {
        exibeConteudo(indice);
    });
});

function exibeConteudo(indice){
    const blocosConteudo = document.querySelectorAll('.conteudo')
    const divConteudo = blocosConteudo[indice];

    if (divConteudo.classList.contains('mostra')) {
        divConteudo.classList.remove('mostra');
    }else{
        divConteudo.classList.add('mostra');
    }
}



var dataDeNascimento = new Date("1987-12-31")
var idade = new Date().getFullYear() - dataDeNascimento.getFullYear();
document.getElementById("idade").innerHTML = idade;




var todosDesenhos = document.querySelectorAll("#desenhos img");
var desenhoAtual = 0;
var intervaloTransicao = setInterval(trocarDesenho, 5000);

function trocarDesenho(){
    todosDesenhos[desenhoAtual].classList.remove("exibir");
    desenhoAtual = (desenhoAtual + 1) % todosDesenhos.length;
    todosDesenhos[desenhoAtual].classList.add("exibir");
}

var todasFotografias = document.querySelectorAll("#fotografias img");
var fotoAtual = 0;
var intervaloTransicao = setInterval(trocarFoto, 5000);
function trocarFoto(){
    todasFotografias[fotoAtual].classList.remove("exibir");
    fotoAtual = (fotoAtual + 1) % todasFotografias.length;
    todasFotografias[fotoAtual].classList.add("exibir");
}




