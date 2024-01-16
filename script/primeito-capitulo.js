import * as mudarConteudo from './script.js';
window.addEventListener('DOMContentLoaded', () => {
    let nomeUsuario = '';
    const dialogoEscolha = document.querySelector('h1.dialogo-escolha')
    const btnComecarJornada = document.querySelector('button.js-comecar-jornada-btn');
    const inputInfo = document.querySelector("input.js-input-info");
    const btnAvancar = document.querySelector('button.js-btn-avancar');
    const paragrafoPrimeiraEscolha = document.querySelector('.js-primeira-escolha');
    const paragrafoSegundaEscolha = document.querySelector('.js-segunda-escolha');
    const personagem = document.querySelector('.js-personagem')
    const body = document.body;
    const main = document.querySelector('main')
    const audio = new Audio('../audio/som-terror.mp3')
    function dialogoInicial() {
        if (inputInfo.value.length <= 2 || !(isNaN(inputInfo.value + 1))) {
            alert('Por favor, é necessario informar um nome valido')
        }
        else {
            dialogoEscolha.textContent = ''
            btnAvancar.classList.add('none')
            personagem.classList.remove('none')
            personagem.classList.add('animacao-subindo')
            nomeUsuario = inputInfo.value;
            inputInfo.classList.add('none')
            paragrafoPrimeiraEscolha.classList.remove('none')
            paragrafoPrimeiraEscolha.textContent = `Olá ${nomeUsuario}! Aqui quem fala é o mestre dos magos`
            paragrafoPrimeiraEscolha.classList.add('animacao-aparecer')
            setTimeout(() => {
                paragrafoSegundaEscolha.classList.remove('none')
                paragrafoSegundaEscolha.textContent = 'Viajante intrépido, em Eldoria, onde elfos, anões e fadas tecem o cenário mágico, uma antiga sombra ameaça o equilíbrio. Tu, escolhido, és chamado para enfrentar o mal que se ergue. Com a aliança de criaturas lendárias como centauros, grifos e ninfas, tua jornada decidirá o destino desse reino. Ergue-te, pois a esperança de Eldoria repousa em teu coração corajoso.'
                paragrafoSegundaEscolha.classList.add('animacao-esquerda')
                setTimeout(() => {
                    btnComecarJornada.textContent = 'Começar Jornada'
                    btnComecarJornada.classList.remove('none')
                    btnComecarJornada.classList.add('animacao-aparecer')
                }, 4000)
            }, 2400)
        }
    }

    function introducao() {
        dialogoEscolha.textContent = 'Olá caro aventureiro(a) poderia informar o seu nome ?'
        btnAvancar.textContent = 'Informar Nome'
        btnAvancar.addEventListener('click', dialogoInicial)
    }

    introducao()

    function terminarCapitulo() {
        main.classList.add('none')
        body.classList.add('fim-capitulo')
        mudarConteudo.mudarAparenciaElemento(body, 'none', '#000000', undefined)
        let textoFecharCapitulo = document.createElement('h1')
        textoFecharCapitulo.textContent = 'Fim do capitulo 1....'
        body.appendChild(textoFecharCapitulo)
        textoFecharCapitulo.classList.add('final-capitulo')
    }

    function fimHistoriaMalvagor() {
        paragrafoSegundaEscolha.classList.remove('animacao-aparecer')
        paragrafoSegundaEscolha.textContent = ''
        btnAvancar.classList.add('none')
        body.style.background = '#006400 url(../image/fundo-floresta.webp)no-repeat top center'
        personagem.setAttribute('src', 'image/mago.webp')
        paragrafoPrimeiraEscolha.classList.add('animacao-aparecer')
        paragrafoPrimeiraEscolha.textContent = 'Agora, viajante corajoso, tua missão é clara. Explore as terras de Eldoria, converse com as criaturas mágicas, busque conhecimento nas antigas bibliotecas elficas, forje alianças com anões nas profundezas das montanhas e ganhe a confiança das fadas nos bosques encantados. Reúne artefatos perdidos, aprimora tuas habilidades mágicas e prepara-te para confrontar Malvagor.'
        setTimeout(() => {
            paragrafoSegundaEscolha.classList.add('animacao-aparecer')
            paragrafoSegundaEscolha.textContent = 'Cada escolha que fizeres moldará tua jornada, influenciando o destino de Eldoria. A treva aguarda, mas a luz repousa em teu coração. O reino depende de tua bravura. Parte agora, destemido, e escreve tua lenda neste mundo de magia e mistério.'
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
        btnAvancar.classList.add('none')
        personagem.setAttribute('src', 'image/rosto-malfagor.webp')
        personagem.classList.remove('animacao-subindo')
        personagem.classList.add('animacao-aparecer')
        mudarConteudo.mudarAparenciaElemento(body, 'none', '#000000', undefined)
        personagem.style.marginTop = '30px'
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
        paragrafoPrimeiraEscolha.classList.remove('animacao-aparecer')
        paragrafoSegundaEscolha.classList.remove('animacao-esquerda')
        btnAvancar.removeEventListener('click', dialogoInicial)
        dialogoEscolha.style.fontSize = '1.6rem';
        dialogoEscolha.classList.add('animacao-esquerda')
        dialogoEscolha.innerHTML = 'Como informei anteriormente, sou o mestre dos magos, meu nome é <span class="Althor-nome">Althor</span> guardião da antiga sabedoria e condutor de tua jornada épica'
        inputInfo.classList.add('none')
        btnComecarJornada.remove()
        paragrafoSegundaEscolha.textContent = ''
        paragrafoPrimeiraEscolha.textContent = ''
        setTimeout(() => {
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