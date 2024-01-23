import * as geral from './script.js';
import * as mudarConteudo from './mudar-conteudo.js'
window.addEventListener('DOMContentLoaded', () => {
    let tituloTrocaDeCenario = geral.criarH1NoBody('');
    const escolhasPersonagem = document.querySelectorAll('.js-escolha');
    const falaPersonagem = document.querySelector('.secao-dialogo h1');
    const dialogos = document.querySelectorAll('.js-dialogo');
    const btnAvancar = document.querySelector('.js-btn-avancar');
    let regiaoEscolhida = '';
    let somAmbiente;
    let tempoDeCarregamento = 6000;
    let tempoCarregamentoSecundario = 4000;
    let carregamentoInterativo;
    let variavelIncremento = 0;

    function funcaoCarregamentoInterativo(textoCarregamento) {
        return setInterval(() => {
            if (variavelIncremento >= 3) {
                variavelIncremento = 0
                textoCarregamento.textContent = textoCarregamento.textContent.slice(0, textoCarregamento.textContent.indexOf('.'))
            } else {
                variavelIncremento += 1
                textoCarregamento.textContent += '.'
            }
        }, 500)
    }

    escolhasPersonagem.forEach(opcao => opcao.addEventListener('click', escolhasSegundoCapitulo))

    function escolhasSegundoCapitulo() {
        escolhasPersonagem.forEach(opcao => {
            opcao.parentElement.classList.add('none')
            opcao.removeEventListener('click', escolhasSegundoCapitulo)
        })
        switch (this.textContent) {
            case "Floresta Élfica":
                regiaoEscolhida = 'Floresta Élfica'
                break

            case "Montanhas Anor":
                regiaoEscolhida = 'Montanhas Anor'
                break
        }

        escolhaRegiao()
    }

    function escolhaRegiao() {
        falaPersonagem.classList.add('animacao-esquerda')
        let segundaFala = ''
        switch (regiaoEscolhida) {
            case "Floresta Élfica":
                falaPersonagem.innerHTML = '<span class="aliado-nome">Althor</span>: Escolheste o caminho das árvores ancestrais e da magia élfica'
                segundaFala = '<span class="aliado-nome">Althor</span>: Teus passos agora seguem a dança das folhas e o sussurro das árvores. Na Floresta Élfica, aliados sábios e segredos aguardam tua jornada. Que a luz dos elfos guie teus passos, nobre aventureiro'
                break

            case "Montanhas Anor":
                falaPersonagem.innerHTML = '<span class="aliado-nome">Althor</span>:  Ao escolher o caminho das Montanhas Anor, adentras um reino rochoso, onde anões mestres da forja e segredos antigas aguardam tua jornada corajosa'
                segundaFala = '<span class="aliado-nome">Althor</span>: Que a força das montanhas guie tua jornada, nobre aventureiro, pois grandes desafios e descobertas te aguardam entre suas majestosas rochas'
                break
        }

        setTimeout(() => {
            falaPersonagem.classList.remove('animacao-esquerda')
            dialogos[0].classList.remove('none')
            dialogos[0].innerHTML = segundaFala
            dialogos[0].classList.add('animacao-esquerda')
            setTimeout(() => {
                dialogos[0].classList.remove('animacao-esquerda')
                btnAvancar.classList.remove('none')
                btnAvancar.classList.add('animacao-aparecer')
                btnAvancar.addEventListener('click', irParaRegiao)
            }, 8000)
        }, 3000)
    }

    function irParaRegiao() {
        escolhasPersonagem[0].textContent = 'Sou um aventureiro'
        escolhasPersonagem[1].textContent = 'Sou um guerreiro que veio enfrentar Malfagor'
        btnAvancar.removeEventListener('click', irParaRegiao)
        geral.main.adicionarClasse('none')
        geral.body.classList.add('carregar-conteudo')
        geral.body.appendChild(tituloTrocaDeCenario)
        switch (regiaoEscolhida) {
            // criar uma função para passar o dialogo
            case "Floresta Élfica":
                tituloTrocaDeCenario.textContent = 'Indo até a floresta Élfica'
                carregamentoInterativo = funcaoCarregamentoInterativo(tituloTrocaDeCenario)
                setTimeout(() => {
                    clearInterval(carregamentoInterativo)
                    somAmbiente = setInterval(() => {
                        geral.somFloresta.play()
                    })
                    tituloTrocaDeCenario.textContent = 'Chegando lá voce avista um elfo em sua frente'
                    setTimeout(() => {
                        falaPersonagem.innerHTML = '<span class="aliado-nome">Desconhecido</span>: Alto lá forasteiro, quem és tu ?'
                        dialogos[0].classList.add('none')
                        geral.body.classList.remove('carregar-conteudo')
                        escolhasPersonagem.forEach(opcao => {
                            opcao.parentElement.classList.remove('none')
                            opcao.addEventListener('click', dialogoAposEscolherRegiao)
                        })
                        geral.main.removerClasse('none')
                        geral.imagemAliado.seletor.setAttribute('src', '../image/elfo-floresta.webp')
                    }, tempoCarregamentoSecundario)
                }, tempoDeCarregamento)
                break
            case "Montanhas Anor":


                tituloTrocaDeCenario.textContent = 'Indo até a Montanha Anor'
                carregamentoInterativo = funcaoCarregamentoInterativo(tituloTrocaDeCenario)
                setTimeout(() => {
                    clearInterval(carregamentoInterativo)
                    tituloTrocaDeCenario.textContent = 'Chegando lá voce avista um anão em sua frente'
                    setTimeout(() => {
                        // tituloTrocaDeCenario.classList.add('none')
                        geral.main.removerClasse('none')
                        dialogos[0].classList.add('none')
                        geral.body.classList.remove('carregar-conteudo')
                        falaPersonagem.innerHTML = '<span class="aliado-nome">Desconhecido</span>: Revele-se, estranho, ou enfrente a minha ira'
                        escolhasPersonagem.forEach((opcao) => {
                            opcao.parentElement.classList.remove('none')
                            opcao.addEventListener('click', dialogoAposEscolherRegiao)
                        })
                        geral.imagemAliado.seletor.setAttribute('src', '../image/anao-montanha.webp')
                        geral.body.classList.add('montanha')

                    }, tempoCarregamentoSecundario)
                }, tempoDeCarregamento)
                break
        }

    }

    function dialogoAposEscolherRegiao(e) {
        dialogos[0].classList.remove('none')
        falaPersonagem.classList.add('none')
        escolhasPersonagem[0].parentElement.classList.add('none')
        switch (regiaoEscolhida) {
            case "Floresta Élfica":
                switch (e.target.textContent) {
                    case "Sou um aventureiro":
                        dialogos[0].innerHTML = 'Ora, Ora, há muito tempos não vejo aventureiros por aqui, pois bem meu nome é <span class="aliado-nome">Aldrin</span> <br>E o que procura na grande floresta elfica ?'
                        break;
                    case "Sou um guerreiro que veio enfrentar Malfagor":
                        dialogos[0].innerHTML = 'HAHAHAH pelo visto é um pequeno comediante, por sinal meu nome é <span class="aliado-nome">Aldrin</span> <br> E como voce acha que vai derrotar Malfagor ?'
                        break;
                }
                break;

            case "Montanhas Anor":

                break;
        }

        dialogos[0].classList.add('animacao-esquerda')

    }

})