import * as geral from './script.js'
window.addEventListener('DOMContentLoaded', () => {
    let urlPagina = ''
    if(window.location.hostname == 'yagoluucas.github.io') {
        urlPagina = '/rpg-eldoria/'
    }
    switch(localStorage.getItem('capituloAtual')) {
        case "Capitulo 2":
            window.location.pathname = `${urlPagina}segundo-capitulo.html`
        break
        case "Capitulo 3":
            window.location.pathname = `${urlPagina}terceiro-capitulo.html`
        break
    }
    const audio = document.querySelector('.js-som-terror')

    geral.btnAvancar.addEventListener('click', dialogoInicial)

    function dialogoInicial() {
        geral.btnAvancar.removeEventListener('click', dialogoInicial)
        geral.dialogo[0].classList.add('none')
        geral.btnAvancar.classList.add('none')
        geral.anima('animate__slideInUp', geral.imagemAliado)
        geral.anima('animate__fadeInLeft', geral.dialogo[2])
        geral.dialogo[2].textContent = 'Viajante intrépido, em Eldoria, onde elfos, anões e fadas tecem o cenário mágico, uma antiga sombra ameaça o equilíbrio. Tu, escolhido, és chamado para enfrentar o mal que se ergue. Com a aliança de criaturas lendárias como centauros, grifos e ninfas, tua jornada decidirá o destino desse reino. Ergue-te, pois a esperança de Eldoria repousa em teu coração corajoso.'
        setTimeout(() => {
            geral.btnAvancar.textContent = 'Começar Jornada'
            geral.anima('animate__fadeIn',  geral.btnAvancar)
            geral.btnAvancar.addEventListener('click', comecarJornada)
        }, 4000)
    }

    function comecarJornada() {
        geral.btnAvancar.removeEventListener('click', comecarJornada)
        geral.anima('animate__fadeInLeft', geral.dialogo[0])
        geral.btnAvancar.classList.add('none')
        geral.btnAvancar.removeEventListener('click', dialogoInicial)
        geral.dialogo[0].style.margimBottom = '5px'
        geral.dialogo[0].innerHTML = 'Como informei anteriormente, sou o mestre dos magos, meu nome é <span class="aliado-nome">Althor</span> guardião da antiga sabedoria e condutor de tua jornada épica'
        geral.dialogo[2].textContent = ''
        geral.dialogo[1].textContent = ''
        setTimeout(() => {
            geral.anima('animate__fadeInLeft', geral.dialogo[1])
            geral.dialogo[1].textContent = 'Nobre viajante, nossa terra era feliz, onde seres místicos brincavam e confraternizavam pelos campos'
            setTimeout(() => {
                geral.anima('animate__fadeInLeft', geral.dialogo[2])
                geral.dialogo[2].innerHTML = 'Contudo, a alegria foi interrompida pela chegada de um mal ancestral, conhecido como <span class="nome-vilao">Malvagor</span>'
                setTimeout(() => {
                    geral.anima('animate__fadeIn', geral.btnAvancar)
                    geral.btnAvancar.textContent = 'Ver historia de Malvagor'
                    geral.btnAvancar.style.backgroundColor = '#FF0000'
                    geral.btnAvancar.addEventListener('click', historiaMalvagor)
                }, 3000)
            }, 3000)
        }, 3000)
    }

    function historiaMalvagor() {
        audio.play()
        geral.imagemAliado.classList.add('none')
        geral.btnAvancar.classList.add('none')
        geral.anima('animate__fadeIn', geral.imagemInimigo)
        document.body.classList.add('carregar-conteudo')
        geral.dialogo[0].classList.add('none')
        geral.anima('animate__fadeInLeft', geral.dialogo[1])
        geral.dialogo[1].textContent = 'Malvagor, sombrio por natureza, emerge das profundezas do desconhecido. Uma vez um ser de luz corrompido por ambições desmedidas, sua busca por poder desencadeou uma onda de trevas sobre Eldoria. Utilizando artes proibidas, despertou criaturas antigas e enegreceu corações leais'
        geral.dialogo[2].textContent = ''
        geral.revelarDialogo(4000, geral.dialogo[2], 'animate__fadeInLeft', 'Assolou nossas terras, desafiando a harmonia que reinava entre elfos, anões e fadas. Com suas artimanhas, desencadeou conflitos e semeou discórdia, tornando-se a personificação da sombra que paira sobre Eldoria')
        setTimeout(() => {
            geral.btnAvancar.removeEventListener('click', historiaMalvagor)
            geral.revelarDialogo(0, geral.btnAvancar, 'animate__fadeIn', 'Continuar')
            geral.btnAvancar.style.backgroundColor = '#006400'
            geral.btnAvancar.addEventListener('click', fimHistoriaMalvagor)
        }, 9000)
    }

    function fimHistoriaMalvagor() {
        document.body.classList.remove('carregar-conteudo')
        geral.btnAvancar.removeEventListener('click', fimHistoriaMalvagor)
        geral.imagemInimigo.classList.add('none')
        geral.anima('animate__slideInUp', geral.imagemAliado)
        geral.dialogo[2].textContent = ''
        geral.btnAvancar.classList.add('none')
        geral.revelarDialogo(0, geral.dialogo[1], 'animate__fadeInLeft', 'Agora, viajante corajoso, tua missão é clara. Explore as terras de Eldoria, converse com as criaturas mágicas, busque conhecimento nas antigas bibliotecas elficas, forje alianças com anões nas profundezas das montanhas e ganhe a confiança das fadas nos bosques encantados. Reúne artefatos perdidos, aprimora tuas habilidades mágicas e prepara-te para confrontar Malvagor.')
        geral.revelarDialogo(5000, geral.dialogo[2],'animate__fadeInLeft', 'Cada escolha que fizeres moldará tua jornada, influenciando o destino de Eldoria. A treva aguarda, mas a luz repousa em teu coração. O reino depende de tua bravura. Parta agora, e escreva sua lenda neste mundo de magia e mistério.')
        geral.revelarDialogo(10000, geral.btnAvancar, 'animate__fadeIn', 'Iniciar aventura...')
        geral.btnAvancar.addEventListener('click', terminarCapitulo)
    }

    function terminarCapitulo() {
        document.body.classList.add('carregar-conteudo')
        let textoFecharCapitulo = geral.criarH1NoBody('Final do capitulo 1')
        document.body.appendChild(textoFecharCapitulo)
        geral.finalCapitulo(textoFecharCapitulo, 'Inicio do capitulo 2', 'segundo-capitulo')
    }
})