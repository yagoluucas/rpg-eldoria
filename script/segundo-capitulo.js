import * as geral from './script.js';
window.addEventListener('DOMContentLoaded' , () => {
const escolhasPersonagem = document.querySelectorAll('.js-escolha')
const falaPersonagem = document.querySelector('.secao-dialogo h1')

function funcaoFlorestaElfica() {
    falaPersonagem.innerHTML = '<span class="Althor-nome">Althor</span>: Escolheste o caminho das árvores ancestrais e da magia élfica. Na Floresta Élfica, encontrarás aliados sábios e segredos antigos'
}

function escolhasSegundoCapitulo() {
    escolhasPersonagem.forEach(opcao => opcao.classList.add('none'))
    let escolhaDousuario = this.textContent
    switch (escolhaDousuario) {
        case "Floresta Élfica" :
            funcaoFlorestaElfica()
        break

        case "Montanhas Anor":
            funcaoMontanhasAnor()
        break
    }
}

escolhasPersonagem.forEach((opcao) => {
    opcao.addEventListener('click', escolhasSegundoCapitulo)
    
})

})