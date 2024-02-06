export function AlterarConteudo(seletor) {
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

export const body = document.body
export const somFloresta = document.querySelector('.js-som-floresta')
export const somMontanha = document.querySelector('.js-som-montanha')
export const imagemAliado = new AlterarConteudo('.js-personagem')
export const imagemInimigo = new AlterarConteudo('.js-inimigo')
export const main = new AlterarConteudo('main')

export function criarH1NoBody(textoTitulo) {
    let textoFecharCapitulo = document.createElement('h1')
    textoFecharCapitulo.textContent = textoTitulo
    textoFecharCapitulo.classList.add('final-capitulo')
    return textoFecharCapitulo
}

let variavelIncremento = 0;
export function funcaoCarregamentoInterativo(textoCarregamento) {
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

export function anima(nomeAnimacao, elemento) {
    if(elemento.length !== undefined) {
        elemento.forEach((e) => {
            e.classList.add(nomeAnimacao)
            setTimeout(() => {
                e.classList.remove(nomeAnimacao)
            }, 1000)
        })
    } else {
        elemento.classList.add(nomeAnimacao)
        setTimeout(() => {
            elemento.classList.remove(nomeAnimacao)
        }, 1000)
    }
}

export function revelarDialogo(tempoRevelacao, paragrafo, animacao, texto) {
    setTimeout(() => {
        anima(animacao, paragrafo)
        paragrafo.innerHTML = texto
    }, tempoRevelacao)

}
