import * as mudarConteudo from './mudar-conteudo.js';
import * as geral from './script.js'
window.addEventListener('DOMContentLoaded', () => {

    switch(localStorage.getItem('capituloAtual')) {
        case "Capitulo 2":
            window.location.pathname = '/html/segundo-capitulo.html'
        break
        case "Capitulo 3":
            window.location.pathname = '/html/terceiro-capitulo.html'
        break
    }
    const personagem = new geral.AlterarConteudo('.js-personagem')
    const dialogoEscolha = document.querySelector('h1.dialogo-escolha')
    const btnComecarJornada = document.querySelector('button.js-comecar-jornada-btn');
    const btnAvancar = new geral.AlterarConteudo('button.js-btn-avancar');
    const paragrafoPrimeiraEscolha = document.querySelector('.js-primeira-escolha');
    const paragrafoSegundaEscolha = document.querySelector('.js-segunda-escolha');    
    const rostoMalfagor = new geral.AlterarConteudo('.js-malfagor')
    const audio = document.querySelector('.js-som-terror')
    function dialogoInicial() {
        dialogoEscolha.classList.add('none')
        btnAvancar.adicionarClasse('none')
        personagem.removerClasse('none')
        personagem.adicionarClasse('animacao-subindo')
        paragrafoSegundaEscolha.classList.remove('none')
        paragrafoSegundaEscolha.textContent = 'Viajante intrépido, em Eldoria, onde elfos, anões e fadas tecem o cenário mágico, uma antiga sombra ameaça o equilíbrio. Tu, escolhido, és chamado para enfrentar o mal que se ergue. Com a aliança de criaturas lendárias como centauros, grifos e ninfas, tua jornada decidirá o destino desse reino. Ergue-te, pois a esperança de Eldoria repousa em teu coração corajoso.'
        geral.anima('animacao-esquerda', paragrafoSegundaEscolha)
        setTimeout(() => {
            btnComecarJornada.textContent = 'Começar Jornada'
            btnComecarJornada.classList.remove('none')
            btnComecarJornada.classList.add('animacao-aparecer')
        }, 4000)
    }

    function introducao() {
        dialogoEscolha.textContent = 'Bem vindo ao reino de Eldoria caro guerreiro(a). Tuas escolhas moldarão o destino de Eldoria. Prepara-te para uma jornada épica'
        btnAvancar.alterarTexto('Continuar') 
        btnAvancar.seletor.addEventListener('click', dialogoInicial)
    }

    introducao()

    function terminarCapitulo() {
        geral.main.adicionarClasse('none')
        document.body.classList.add('carregar-conteudo')
        mudarConteudo.mudarAparenciaElemento(document.body, 'none', '#000000')
        let textoFecharCapitulo = geral.criarH1NoBody('Final do capitulo 1')
        document.body.appendChild(textoFecharCapitulo)
        geral.finalCapitulo(textoFecharCapitulo, 'Inicio do capitulo 2', 'segundo-capitulo')
    }

    function fimHistoriaMalvagor() {
        rostoMalfagor.adicionarClasse('none')
        personagem.removerClasse('none')
        paragrafoSegundaEscolha.textContent = ''
        btnAvancar.adicionarClasse('none')
        document.body.style.background = '#006400 url(../image/fundo-floresta.webp)no-repeat top center'
        paragrafoPrimeiraEscolha.classList.add('animacao-aparecer')
        paragrafoPrimeiraEscolha.textContent = 'Agora, viajante corajoso, tua missão é clara. Explore as terras de Eldoria, converse com as criaturas mágicas, busque conhecimento nas antigas bibliotecas elficas, forje alianças com anões nas profundezas das montanhas e ganhe a confiança das fadas nos bosques encantados. Reúne artefatos perdidos, aprimora tuas habilidades mágicas e prepara-te para confrontar Malvagor.'
        setTimeout(() => {
            geral.revelarDialogo(0, paragrafoSegundaEscolha,'animacao-aparecer', 'Cada escolha que fizeres moldará tua jornada, influenciando o destino de Eldoria. A treva aguarda, mas a luz repousa em teu coração. O reino depende de tua bravura. Parta agora, e escreva sua lenda neste mundo de magia e mistério.')
            setTimeout(() => {
                btnAvancar.removerClasse('none')
                btnAvancar.adicionarClasse('animacao-aparecer')
                btnAvancar.seletor.removeEventListener('click', fimHistoriaMalvagor)
                btnAvancar.alterarTexto('Iniciar aventura...')
                btnAvancar.seletor.addEventListener('click', terminarCapitulo)
            }, 5000)
        }, 5000)
    }

    function historiaMalvagor() {
        audio.play()
        personagem.adicionarClasse('none')
        btnAvancar.adicionarClasse('none')
        rostoMalfagor.removerClasse('none')
        rostoMalfagor.adicionarClasse('animacao-aparecer')
        mudarConteudo.mudarAparenciaElemento(document.body, 'none', '#000000')
        dialogoEscolha.classList.add('none')
        paragrafoSegundaEscolha.classList.remove('animacao-esquerda')
        paragrafoPrimeiraEscolha.textContent = 'Malvagor, sombrio por natureza, emerge das profundezas do desconhecido. Uma vez um ser de luz corrompido por ambições desmedidas, sua busca por poder desencadeou uma onda de trevas sobre Eldoria. Utilizando artes proibidas, despertou criaturas antigas e enegreceu corações leais'
        paragrafoSegundaEscolha.textContent = ''
        geral.revelarDialogo(4000, paragrafoSegundaEscolha, 'animacao-aparecer', 'Assolou nossas terras, desafiando a harmonia que reinava entre elfos, anões e fadas. Com suas artimanhas, desencadeou conflitos e semeou discórdia, tornando-se a personificação da sombra que paira sobre Eldoria')
        setTimeout(() => {
            btnAvancar.seletor.removeEventListener('click', historiaMalvagor)
            btnAvancar.removerClasse('none')
            btnAvancar.alterarTexto('Continuar')
            btnAvancar.seletor.style.backgroundColor = '#006400'
            btnAvancar.seletor.addEventListener('click', fimHistoriaMalvagor)
        }, 9000)
    }
    btnComecarJornada.addEventListener('click', () => {
        dialogoEscolha.classList.remove('none')
        paragrafoPrimeiraEscolha.classList.remove('animacao-aparecer')
        paragrafoSegundaEscolha.classList.remove('animacao-esquerda')
        btnAvancar.seletor.removeEventListener('click', dialogoInicial)
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
                    btnAvancar.removerClasse('none')
                    btnAvancar.adicionarClasse('btn-avancar')
                    btnAvancar.removerClasse('animacao-aparecer')
                    btnAvancar.alterarTexto('Ver historia de Malvagor')
                    btnAvancar.seletor.style.backgroundColor = '#FF0000'
                    btnAvancar.seletor.addEventListener('click', historiaMalvagor)
                }, 3000)
            }, 3000)
        }, 3000)

    })

})