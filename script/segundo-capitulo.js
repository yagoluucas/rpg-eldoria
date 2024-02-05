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
        mudarConteudo.anima('animacao-esquerda', falaPersonagem)
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
            dialogos[0].classList.remove('none')
            dialogos[0].innerHTML = segundaFala
            mudarConteudo.anima('animacao-esquerda',  dialogos[0])
            setTimeout(() => {
                btnAvancar.classList.remove('none')
                mudarConteudo.anima('animacao-aparecer', btnAvancar)
                btnAvancar.addEventListener('click', irParaRegiao)
            }, 8000)
        }, 3000)
    }

    function irParaRegiao() {
        btnAvancar.classList.add('none')
        escolhasPersonagem[0].textContent = 'Sou um aventureiro'
        escolhasPersonagem[1].textContent = 'Sou um guerreiro que veio enfrentar Malfagor'
        btnAvancar.removeEventListener('click', irParaRegiao)
        geral.main.adicionarClasse('none')
        geral.body.classList.add('carregar-conteudo')
        geral.body.appendChild(tituloTrocaDeCenario)
        switch (regiaoEscolhida) {
            case "Floresta Élfica":
                tituloTrocaDeCenario.textContent = 'Indo até a floresta Élfica'
                carregamentoInterativo = geral.funcaoCarregamentoInterativo(tituloTrocaDeCenario)
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
                carregamentoInterativo = geral.funcaoCarregamentoInterativo(tituloTrocaDeCenario)
                setTimeout(() => {
                    somAmbiente = setInterval(() => {
                        geral.somMontanha.play()
                    })
                    clearInterval(carregamentoInterativo)
                    tituloTrocaDeCenario.textContent = 'Chegando lá voce avista um anão em sua frente'
                    setTimeout(() => {
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
        escolhasPersonagem.forEach(e => e.removeEventListener('click', dialogoAposEscolherRegiao))
        let respostaEscolhida = e.target.textContent
        dialogos[0].classList.remove('none')
        falaPersonagem.classList.add('none')
        //opcão abaixo defini o que o aliado vai falar de acordo com região e escolha do usuario 
        switch (regiaoEscolhida) {
            case "Floresta Élfica":
                switch (respostaEscolhida) {
                    case "Sou um aventureiro":
                        dialogos[0].innerHTML = 'Ora, Ora, há muito tempos não vejo aventureiros por aqui, pois bem meu nome é <span class="aliado-nome">Aldrin</span> <br>E o que procura na grande floresta elfica ?'
                        break;
                    case "Sou um guerreiro que veio enfrentar Malfagor":
                        dialogos[0].innerHTML = 'HAHAHAH pelo visto é um pequeno comediante, por sinal meu nome é <span class="aliado-nome">Aldrin</span> <br> E como voce acha que vai derrotar Malfagor ?'
                        break;
                }
                localStorage.nomeAliado = 'Aldrin'
                break;

            case "Montanhas Anor":
                switch (respostaEscolhida) {
                    case "Sou um aventureiro":
                        dialogos[0].innerHTML = 'Aventureiro, palavras para mim são como o vento. Demonstre tua coragem. Aqui, sou <span class="aliado-nome">Dúrin</span>, Ferreiro da Montanha. E tu, forasteiro, o que procuras nas Montanhas ?'
                        break;
                    case "Sou um guerreiro que veio enfrentar Malfagor":
                        dialogos[0].innerHTML = 'Guerreiro destemido, o humor é a sua piada? Eu sou <span class="aliado-nome">Dúrin</span>, Ferreiro da Montanha. Enfrentar Malfagor é motivo para risos. Fale, estranho, como pretendes fazê-lo?'
                        break;
                }

                localStorage.nomeAliado = 'Dúrin'
            break    
        }
        mudarConteudo.anima('animacao-esquerda', dialogos[0])
        mudarConteudo.anima('animacao-esquerda', escolhasPersonagem)
        escolhasPersonagem.forEach((element) => element.addEventListener('click', escolhaArmaAliado))

        //opção abaixo defini as opções de escolha do usuario de acordo com as opções que ele escolheu

        switch (respostaEscolhida) {
            case "Sou um aventureiro":
                escolhasPersonagem[0].textContent = 'Procuro aliados para poder derrotar Malvagor'
                escolhasPersonagem[1].textContent = 'Preciso ficar mais forte para assim conseguir derrotar malvagor'
                break;

            case "Sou um guerreiro que veio enfrentar Malfagor":
                escolhasPersonagem[0].textContent = 'Com a aliança de um valente companheiro com certeza terei sucesso em minha missão'
                escolhasPersonagem[1].textContent = 'Aprimorando meu arsenal, forjando novas armas e vestindo uma armadura imponente'
                break;
        }
        
    }

    function escolhaArmaAliado(event) {
        mudarConteudo.anima('animacao-aparecer', escolhasPersonagem)
        let opcaoEscolhida = event.target.textContent
        escolhasPersonagem.forEach(e => e.textContent = '')
        mudarConteudo.anima('animacao-aparecer', dialogos[0])
        escolhasPersonagem[1].parentElement.classList.add('mostrar-arma')
        escolhasPersonagem.forEach(element => element.removeEventListener('click', escolhaArmaAliado))
        let tempoDeApresentacaoArmas
        if(opcaoEscolhida.startsWith('Procuro') || opcaoEscolhida.startsWith('Com')) {
            tempoDeApresentacaoArmas = 6000
            dialogos[0].innerHTML = `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Bom, talvez esteja na hora de alguem criar coragem e enfrentar malvagor, então eu ${localStorage.nomeAliado}, serei o seu aliado`
            setTimeout(() => {
                dialogos[1].innerHTML = `Para iniciarmos a nossa jornada é necessário escolher uma arma, você pode escolher entre as opções abaixo`
            },3000)
        } else {
            tempoDeApresentacaoArmas = 3000
            dialogos[0].innerHTML = `<span class="aliado-nome">${localStorage.nomeAliado}</span>: De fato, para enfrentar Malvagor, você terá que ter uma boa arma, abaixo você pode escolher entre tres tipos de arma`
        }

        setTimeout(() => {
            mudarConteudo.anima('animacao-esquerda', escolhasPersonagem)
            escolhasPersonagem.forEach(e => e.addEventListener('click', escolherArma))
            escolhasPersonagem[2].classList.remove('none')
            escolhasPersonagem[0].innerHTML = '<img class="imagem-arma" src="../image/arma-1.png" alt="Machado"><br><span class="arma">Machado da Tempestade</span><span> feito com aço temperado. Pesado e intimidador</span>'
            escolhasPersonagem[1].innerHTML = '<img class="imagem-arma" src="../image/arma-2.png" alt="Espada"><br><span class="arma">Espada da Aurora</span><span> forjada com maestria por hábeis artesãos. Brilha com a luz do amanhecer, refletindo esperança e beleza</span>'
            escolhasPersonagem[2].innerHTML = '<img class="imagem-arma" src="../image/arma-3.png" alt="Cajado"><br><span class="arma">Cajado arcano</span> <span> adornado com entalhes místicos que capturam a essência do desconhecido</span>'
        }, tempoDeApresentacaoArmas)

    }

    function escolherArma(e) {
        switch(e.target.firstElementChild.getAttribute('alt')){
            case "Machado":
                // logica caso escolha machado
            break

            case "Espada":
                // logica caso escolha espada
            break

            case "Cajado":
                // logica caso escolha cajado
            break
        }
    }
})