import * as geral from './script.js';
window.addEventListener('DOMContentLoaded' , () => {
const escolhasPersonagem = document.querySelectorAll('.js-escolha')
const falaPersonagem = document.querySelector('.secao-dialogo h1')
const dialogos = document.querySelectorAll('.js-dialogo')

function funcaoFlorestaElfica() {
    // const somFloresta = setInterval(() => {
    //     geral.somFloresta.play()
    // })

    falaPersonagem.classList.add('animacao-esquerda')
    falaPersonagem.innerHTML = '<span class="aliado-nome">Althor</span>: Escolheste o caminho das árvores ancestrais e da magia élfica. Na Floresta Élfica, encontrarás aliados sábios e segredos antigos'
    setTimeout(() => {
        dialogos[0].classList.remove('none')
        dialogos[0].classList.add('animacao-esquerda')
        dialogos[0].innerHTML = '<span class="aliado-nome">Althor</span>: Teus passos agora seguem a dança das folhas e o sussurro das árvores. Na Floresta Élfica, aliados sábios e segredos aguardam tua jornada. Que a luz dos elfos guie teus passos, nobre aventureiro'
        // geral.body.classList.add('carregar-conteudo')
        geral.body.title = 'Clique em qualquer lugar para continuar'
    },5000)
}

function funcaoMontanhasAnor() {
    falaPersonagem.innerHTML = '<span class="aliado-nome">Althor</span>:  Ao escolher o caminho das Montanhas Anor, adentras um reino rochoso, onde anões mestres da forja e segredos antigas aguardam tua jornada corajosa'
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