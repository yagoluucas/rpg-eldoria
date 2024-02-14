const somFloresta = document.querySelector('.js-som-floresta')
const somMontanha = document.querySelector('.js-som-montanha')
const imagemAliado = document.querySelector('.js-aliado')
const imagemInimigo = document.querySelector('.js-inimigo')
const main = document.querySelector('main')
const dialogo = document.querySelectorAll('.js-secao-dialogo .js-dialogo')
const escolhasPersonagem = document.querySelectorAll('.js-escolha')
const btnAvancar = document.querySelector('.js-btn-avancar')

function criarH1NoBody(textoTitulo) {
    let textoFecharCapitulo = document.createElement('h1')
    textoFecharCapitulo.textContent = textoTitulo
    textoFecharCapitulo.classList.add('final-capitulo')
    return textoFecharCapitulo
}

let variavelIncremento = 0;
function funcaoCarregamentoInterativo(elemento) {
    return setInterval(() => {
        if (variavelIncremento >= 3) {
            variavelIncremento = 0
            elemento.textContent = elemento.textContent.slice(0, elemento.textContent.indexOf('.'))
        } else {
            variavelIncremento += 1
            elemento.textContent += '.'
        }
    }, 500)
}

function anima(nomeAnimacao, elemento) {
    if (elemento.length != undefined) {
        elemento.forEach((e) => {
            e.classList.remove('none')
            e.classList.add(nomeAnimacao)
            setTimeout(() => {
                e.classList.remove(nomeAnimacao)
            }, 1000)
        })
        return
    }
    elemento.classList.remove('none')
    elemento.classList.add(nomeAnimacao)
    setTimeout(() => {
        elemento.classList.remove(nomeAnimacao)
    }, 1000)
}

function revelarDialogo(tempoRevelacao, elemento, texto) {
    setTimeout(() => {
        anima('animate__fadeInLeft', elemento)
        elemento.innerHTML = texto
    }, tempoRevelacao)
}

function finalCapitulo(parafrago, textoParagrafo, capitulo) {
    main.classList.add('none')
    let urlPagina = ''
        if(window.location.hostname == 'yagoluucas.github.io') {
            urlPagina = '/rpg-eldoria/'
        }
    setTimeout(() => {
        parafrago.classList.add('animate__animated', 'animate__slideInDown')
        parafrago.textContent = textoParagrafo
        setTimeout(() => {
            window.location.pathname = `${urlPagina}${capitulo}.html`
        }, 3000)
    }, 3000)
}

function getItemLocalStorage(item) {
    return localStorage.getItem(item)
}

export { funcaoCarregamentoInterativo, anima, revelarDialogo, criarH1NoBody, finalCapitulo,getItemLocalStorage, somFloresta, somMontanha, imagemAliado, imagemInimigo, main, dialogo, escolhasPersonagem, btnAvancar }
