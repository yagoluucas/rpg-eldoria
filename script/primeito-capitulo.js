window.addEventListener('DOMContentLoaded', () => {
    let nomeUsuario;
    const dialogoEscolha = document.querySelector('h1.dialogo-escolha')
    const btnComecarJornada = document.querySelector('.js-comecar-jornada-btn');
    const secaoDialogo = document.querySelector('.secao-dialogo');
    const inputInfo = document.querySelector("input.js-input-info");
    const btnAvancar = document.querySelector('button.js-btn-avancar');
    const paragrafoPrimeiraEscolha = document.querySelector('.js-primeira-escolha');
    const paragrafoSegundaEscolha = document.querySelector('.js-segunda-escolha');
    const dialogoGeral = document.querySelector('.js-info-geral-personagem');
    console.log(dialogoGeral)
    function primeiroCapitulo() {
        dialogoEscolha.textContent = 'Olá caro aventureiro(a) poderia informar o seu nome ?'
        btnAvancar.textContent = 'Informar Nome'
        btnAvancar.addEventListener('click', () => {
            btnAvancar.classList.add('none')
            nomeUsuario = inputInfo.value;
            paragrafoPrimeiraEscolha.classList.remove('none')
            paragrafoPrimeiraEscolha.textContent = `Olá ${nomeUsuario}! Aqui quem fala é o mestre do elfos`
            paragrafoPrimeiraEscolha.classList.add('animacao-aparecer')
            setTimeout(() => {
                paragrafoSegundaEscolha.classList.remove('none')
                paragrafoSegundaEscolha.textContent = 'Viajante intrépido, em Eldoria, onde elfos, anões e fadas tecem o cenário mágico, uma antiga sombra ameaça o equilíbrio. Tu, escolhido, és chamado para enfrentar o mal que se ergue. Com a aliança de criaturas lendárias como centauros, grifos e ninfas, tua jornada decidirá o destino desse reino. Ergue-te, pois a esperança de Eldoria repousa em teu coração corajoso.'
                paragrafoSegundaEscolha.classList.add('animacao-esquerda')

                setTimeout(() => {
                    btnComecarJornada.classList.remove('none')
                    btnComecarJornada.classList.add('animacao-aparecer')
                }, 4000)
            }, 2400)
        })
    }

    primeiroCapitulo()

    btnComecarJornada.addEventListener('click', () => {
        if (!(nomeUsuario !== undefined)) {
            alert('Por favor, é necessario informar um nome!')
        } else {
            dialogoEscolha.innerHTML = 'Como informei anteriormente, sou o mestre dos elfos, meu nome é <span class="galadran-nome">Galadran</span> guardião da antiga sabedoria e condutor de tua jornada épica'
            inputInfo.classList.add('none')
            btnComecarJornada.remove()
            paragrafoSegundaEscolha.textContent = ''
            paragrafoPrimeiraEscolha.textContent = ''
        }
    })

})