function AlterarConteudo(seletor) {
    this.seletor = document.querySelector(seletor)
}

AlterarConteudo.prototype.adicionarClasse = function(classeAdicionar) {
    this.seletor.classList.add(classeAdicionar)
}

AlterarConteudo.prototype.removerClasse = function(classeRemover) {
    this.seletor.classList.remove(classeRemover)
}

AlterarConteudo.prototype.alterarTexto = function(texto) {
    this.seletor.textContent = texto
} 

const somFloresta = document.querySelector('.js-som-floresta')
const somMontanha = document.querySelector('.js-som-montanha')
const imagemAliado = new AlterarConteudo('.js-personagem')
const imagemInimigo = new AlterarConteudo('.js-inimigo')
const main = new AlterarConteudo('main')

function criarH1NoBody(textoTitulo) {
    let textoFecharCapitulo = document.createElement('h1')
    textoFecharCapitulo.textContent = textoTitulo
    textoFecharCapitulo.classList.add('final-capitulo')
    return textoFecharCapitulo
}

let variavelIncremento = 0;
function funcaoCarregamentoInterativo(textoCarregamento) {
    return setInterval(() => {
        if (variavelIncremento >= 3) {
            variavelIncremento = 0
            textoCarregamento.textContent = textoCarregamento.textContent.slice(0, textoCarregamento.textContent.indexOf('.'))
        } else {
            variavelIncremento += 1
            textoCarregamento.textContent += '.'
        }
    }, 500)
}

function anima(nomeAnimacao, elemento) {
    if(elemento.length != undefined) {
        elemento.forEach((e) => {
            e.classList.add(nomeAnimacao)
            setTimeout(() => {
                e.classList.remove(nomeAnimacao)
            }, 1000)
        })
        return
    }
    elemento.classList.add(nomeAnimacao)
        setTimeout(() => {
            elemento.classList.remove(nomeAnimacao)
        }, 1000)
}

function revelarDialogo(tempoRevelacao, paragrafo, animacao, texto) {
    setTimeout(() => {
        anima(animacao, paragrafo)
        paragrafo.innerHTML = texto
    },tempoRevelacao)
}

// metodo abaixo está funcional
function finalCapitulo(parafrago, textoParagrafo, capitulo) {
    setTimeout(() => {
        parafrago.textContent = textoParagrafo
        anima('animacao-aparecer', parafrago)
        setTimeout(() => {
            window.location.pathname = `/html/${capitulo}.html`
        }, 3000)
    }, 3000)
}

export {AlterarConteudo, funcaoCarregamentoInterativo, anima, revelarDialogo, criarH1NoBody, somFloresta, somMontanha, imagemAliado, imagemInimigo, main, finalCapitulo}
