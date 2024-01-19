export const body = document.body
export const somFloresta = document.querySelector('.js-som-floresta')
// export const secaoDialogo = document.querySelector('section .js-secao-dialogo')
export const imagens = document.querySelectorAll('img')
export function criarH1NoBody(textoTitulo) {
    let textoFecharCapitulo = document.createElement('h1')
    textoFecharCapitulo.textContent = textoTitulo
    textoFecharCapitulo.classList.add('final-capitulo')
    return textoFecharCapitulo
}

export function AlterarConteudo(seletor) {
    this.seletor = document.querySelector(seletor)

    this.adicionarClasse = function(classeAdicionar) {
        this.seletor.classList.add(classeAdicionar)
    }
    this.removerClasse = function(classeRemover) {
        this.seletor.classList.remove(classeRemover)
    }

    this.alterarTexto = function (texto) {
        this.seletor.textContent = texto
    }
}