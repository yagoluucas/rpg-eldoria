import * as geral from './script.js';
import * as mudarConteudo from './mudar-conteudo.js'
window.addEventListener('DOMContentLoaded', () => {
    let tituloTrocaDeCenario = geral.criarH1NoBody('Indo até a floresta elfica...')
    const escolhasPersonagem = document.querySelectorAll('.js-escolha')
    const falaPersonagem = document.querySelector('.secao-dialogo h1')
    const dialogos = document.querySelectorAll('.js-dialogo')
    const btnAvancar = document.querySelector('.js-btn-avancar')
    let regiaoInicialEscolhida = ''

    function funcaoFlorestaElfica() {
        falaPersonagem.classList.add('animacao-esquerda')
        falaPersonagem.innerHTML = '<span class="aliado-nome">Althor</span>: Escolheste o caminho das árvores ancestrais e da magia élfica'
        setTimeout(() => {
            dialogos[0].classList.remove('none')
            dialogos[0].classList.add('animacao-esquerda')
            dialogos[0].innerHTML = '<span class="aliado-nome">Althor</span>: Teus passos agora seguem a dança das folhas e o sussurro das árvores. Na Floresta Élfica, aliados sábios e segredos aguardam tua jornada. Que a luz dos elfos guie teus passos, nobre aventureiro'
            dialogos[0].classList.remove('animacao-esquerda')
            setTimeout(() => {
                btnAvancar.classList.remove('none')
                btnAvancar.classList.add('animacao-aparecer')
                btnAvancar.addEventListener('click', irParaFlorestaElfica)
            }, 8000)
        }, 3000)


    }

    function funcaoMontanhasAnor() {
        falaPersonagem.innerHTML = '<span class="aliado-nome">Althor</span>:  Ao escolher o caminho das Montanhas Anor, adentras um reino rochoso, onde anões mestres da forja e segredos antigas aguardam tua jornada corajosa'
    }

    function escolhasSegundoCapitulo() {
        escolhasPersonagem.forEach(opcao => {
            opcao.parentElement.classList.add('none')
            opcao.removeEventListener('click', escolhasSegundoCapitulo)
        })
        switch (this.textContent) {
            case "Floresta Élfica":
                regiaoInicialEscolhida = 'Floresta Élfica'
                funcaoFlorestaElfica()
                break

            case "Montanhas Anor":
                regiaoInicialEscolhida = 'Montanhas Anor'
                funcaoMontanhasAnor()
                break
        }
    }

    escolhasPersonagem.forEach(opcao => opcao.addEventListener('click', escolhasSegundoCapitulo))

    function irParaFlorestaElfica() {
        btnAvancar.removeEventListener('click', irParaFlorestaElfica)
        geral.main.adicionarClasse('none')
        geral.body.classList.add('carregar-conteudo')
        geral.imagemAliado.adicionarClasse('none')
        geral.body.appendChild(tituloTrocaDeCenario)
        setTimeout(() => {
            const somFloresta = setInterval(() => {
                geral.somFloresta.play()
            })

            tituloTrocaDeCenario.textContent = 'Chegando lá voce avista um elfo em sua frente...'
            setTimeout(() => {
                falaPersonagem.innerHTML = '<span class="aliado-nome">Desconhecido</span>: Alto lá forasteiro, quem és tu ?'
                dialogos[0].classList.add('none')
                geral.body.classList.remove('carregar-conteudo')
                escolhasPersonagem.forEach(opcao => {
                    escolhasPersonagem[0].textContent = 'Sou um aventureiro'
                    escolhasPersonagem[1].textContent = 'Sou um guerreiro que veio enfrentar Malfagor'
                    opcao.parentElement.classList.remove('none')
                    opcao.addEventListener('click', () => {
                        dialogoAposEscolherRegiao('Floresta Élfica')
                    })
                })
                geral.main.removerClasse('none')
                geral.imagemAliado.removerClasse('none')
                geral.imagemAliado.seletor.setAttribute('src', '../image/elfo-floresta.webp')
            }, 4000)
        }, 6000)
    }

    function dialogoAposEscolherRegiao(regiao) {
        dialogos[0].classList.remove('none')
        falaPersonagem.classList.add('none')
        escolhasPersonagem[0].parentElement.classList.add('none')
        switch (this.textContent) {
            case "Sou um aventureiro":
                dialogos[0].innerHTML = 'Ora, Ora, há muito tempos não vejo aventureiros por aqui, pois bem meu nome é <span class="aliado-nome">Aldrin</span> <br>E o que procura na grande floresta elfica ?'
                break;
            case "Sou um guerreiro que veio enfrentar Malfagor":
                dialogos[0].innerHTML = 'HAHAHAH pelo visto é um pequeno comediante, por sinal meu nome é <span class="aliado-nome">Aldrin</span> <br> E como voce acha que vai derrotar Malfagor ?'
                break;
        }

        mudarConteudo.mudarOpcoesEscolhas('capitulo 2', regiao, dialogos, this.textContent)

        dialogos[0].classList.add('animacao-esquerda')
    }

})