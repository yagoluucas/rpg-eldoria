import * as mudarConteudo from './mudar-conteudo.js';
import * as geral from './script.js'
window.addEventListener('DOMContentLoaded', () => {
    const dialogoEscolha = document.querySelector('h1.dialogo-escolha')
    const btnComecarJornada = document.querySelector('button.js-comecar-jornada-btn');
    const btnAvancar = document.querySelector('button.js-btn-avancar');
    const paragrafoPrimeiraEscolha = document.querySelector('.js-primeira-escolha');
    const paragrafoSegundaEscolha = document.querySelector('.js-segunda-escolha');
    const personagem = document.querySelector('.js-personagem')
    const main = document.querySelector('main')
    const rostoMalfagor = document.querySelector('.js-malfagor')
    const audio = document.querySelector('.js-som-terror')
    function dialogoInicial() {
        dialogoEscolha.classList.add('none')
        btnAvancar.classList.add('none')
        personagem.classList.remove('none')
        personagem.classList.add('animacao-subindo')
        paragrafoSegundaEscolha.classList.remove('none')
        paragrafoSegundaEscolha.textContent = 'Viajante intrépido, em Eldoria, onde elfos, anões e fadas tecem o cenário mágico, uma antiga sombra ameaça o equilíbrio. Tu, escolhido, és chamado para enfrentar o mal que se ergue. Com a aliança de criaturas lendárias como centauros, grifos e ninfas, tua jornada decidirá o destino desse reino. Ergue-te, pois a esperança de Eldoria repousa em teu coração corajoso.'
        paragrafoSegundaEscolha.classList.add('animacao-esquerda')
        setTimeout(() => {
            btnComecarJornada.textContent = 'Começar Jornada'
            btnComecarJornada.classList.remove('none')
            btnComecarJornada.classList.add('animacao-aparecer')
        }, 4000)
    }

    function introducao() {
        dialogoEscolha.textContent = 'Bem vindo ao reino de Eldoria caro guerreiro(a). Tuas escolhas moldarão o destino de Eldoria. Prepara-te para uma jornada épica'
        btnAvancar.textContent = 'Continuar'
        btnAvancar.addEventListener('click', dialogoInicial)
    }

    introducao()

    function terminarCapitulo() {
        main.classList.add('none')
        geral.body.classList.add('carregar-conteudo')
        mudarConteudo.mudarAparenciaElemento(geral.body, 'none', '#000000', undefined)
        let textoFecharCapitulo = document.createElement('h1')
        textoFecharCapitulo.textContent = 'Fim do capitulo 1....'
        geral.body.appendChild(textoFecharCapitulo)
        textoFecharCapitulo.classList.add('final-capitulo')
        setTimeout(() => {
            textoFecharCapitulo.textContent = 'Inicio do capitulo 2...'
            textoFecharCapitulo.classList.add('animacao-aparecer')            
            setTimeout(() => {
                window.location.pathname = '/html/segundo-capitulo.html'
            }, 5000)
        }, 5000)
    }

    function fimHistoriaMalvagor() {
        rostoMalfagor.classList.add('none')
        personagem.classList.remove('none')
        paragrafoSegundaEscolha.classList.remove('animacao-aparecer')
        paragrafoSegundaEscolha.textContent = ''
        btnAvancar.classList.add('none')
        geral.body.style.background = '#006400 url(../image/fundo-floresta.webp)no-repeat top center'
        paragrafoPrimeiraEscolha.classList.add('animacao-aparecer')
        paragrafoPrimeiraEscolha.textContent = 'Agora, viajante corajoso, tua missão é clara. Explore as terras de Eldoria, converse com as criaturas mágicas, busque conhecimento nas antigas bibliotecas elficas, forje alianças com anões nas profundezas das montanhas e ganhe a confiança das fadas nos bosques encantados. Reúne artefatos perdidos, aprimora tuas habilidades mágicas e prepara-te para confrontar Malvagor.'
        setTimeout(() => {
            paragrafoSegundaEscolha.classList.add('animacao-aparecer')
            paragrafoSegundaEscolha.textContent = 'Cada escolha que fizeres moldará tua jornada, influenciando o destino de Eldoria. A treva aguarda, mas a luz repousa em teu coração. O reino depende de tua bravura. Parta agora, e escreva sua lenda neste mundo de magia e mistério.'
            setTimeout(() => {
                btnAvancar.classList.remove('none')
                btnAvancar.classList.add('animacao-aparecer')
                btnAvancar.removeEventListener('click', fimHistoriaMalvagor)
                btnAvancar.textContent = 'Iniciar aventura...'
                btnAvancar.addEventListener('click', terminarCapitulo)
            }, 5000)
        }, 5000)
    }

    function historiaMalvagor() {
        audio.play()
        personagem.classList.add('none')
        btnAvancar.classList.add('none')
        rostoMalfagor.classList.remove('none')
        rostoMalfagor.classList.add('animacao-aparecer')
        mudarConteudo.mudarAparenciaElemento(geral.body, 'none', '#000000', undefined)
        dialogoEscolha.classList.add('none')
        paragrafoSegundaEscolha.classList.remove('animacao-esquerda')
        paragrafoPrimeiraEscolha.textContent = 'Malvagor, sombrio por natureza, emerge das profundezas do desconhecido. Uma vez um ser de luz corrompido por ambições desmedidas, sua busca por poder desencadeou uma onda de trevas sobre Eldoria. Utilizando artes proibidas, despertou criaturas antigas e enegreceu corações leais'
        paragrafoSegundaEscolha.textContent = ''
        setTimeout(() => {
            paragrafoSegundaEscolha.classList.add('animacao-aparecer')
            paragrafoSegundaEscolha.textContent = 'Assolou nossas terras, desafiando a harmonia que reinava entre elfos, anões e fadas. Com suas artimanhas, desencadeou conflitos e semeou discórdia, tornando-se a personificação da sombra que paira sobre Eldoria'
        }, 4000)

        setTimeout(() => {
            btnAvancar.removeEventListener('click', historiaMalvagor)
            btnAvancar.classList.remove('none')
            btnAvancar.textContent = 'Continuar'
            btnAvancar.style.backgroundColor = '#006400'
            btnAvancar.addEventListener('click', fimHistoriaMalvagor)
        }, 9000)
    }
    btnComecarJornada.addEventListener('click', () => {
        dialogoEscolha.classList.remove('none')
        paragrafoPrimeiraEscolha.classList.remove('animacao-aparecer')
        paragrafoSegundaEscolha.classList.remove('animacao-esquerda')
        btnAvancar.removeEventListener('click', dialogoInicial)
        dialogoEscolha.style.margimBottom = '5px'
        dialogoEscolha.classList.add('animacao-esquerda')
        dialogoEscolha.innerHTML = 'Como informei anteriormente, sou o mestre dos magos, meu nome é <span class="aliado-nome">Althor</span> guardião da antiga sabedoria e condutor de tua jornada épica'
        btnComecarJornada.remove()
        paragrafoSegundaEscolha.textContent = ''
        paragrafoPrimeiraEscolha.textContent = ''
        setTimeout(() => {
            paragrafoPrimeiraEscolha.classList.remove('none')
            paragrafoPrimeiraEscolha.classList.add('animacao-esquerda')
            paragrafoPrimeiraEscolha.textContent = 'Nobre viajante, nossa terra era feliz, onde seres místicos brincavam e confraternizavam pelos campos'
            setTimeout(() => {
                paragrafoSegundaEscolha.classList.add('animacao-esquerda')
                paragrafoSegundaEscolha.innerHTML = 'Contudo, a alegria foi interrompida pela chegada de um mal ancestral, conhecido como <span class="nome-vilao">Malvagor</span>'
                setTimeout(() => {
                    btnAvancar.classList.remove('none')
                    btnAvancar.classList.add('btn-avancar')
                    btnAvancar.classList.add('animacao-aparecer')
                    btnAvancar.textContent = 'Ver historia de Malvagor'
                    btnAvancar.style.backgroundColor = '#FF0000'
                    btnAvancar.addEventListener('click', historiaMalvagor)
                }, 3000)
            }, 3000)
        }, 3000)

    })

})