import * as geral from './script.js';
window.addEventListener('DOMContentLoaded', () => {
    let tituloTrocaDeCenario = geral.criarH1NoBody('');
    const falaPersonagem = document.querySelector('.secao-dialogo h1');
    let regiaoEscolhida = '';
    let somAmbiente;
    let tempoDeCarregamento = 6000;
    let tempoCarregamentoSecundario = 4000;
    let carregamentoInterativo;
    geral.escolhasPersonagem.forEach(opcao => opcao.addEventListener('click', escolhasSegundoCapitulo))
    localStorage.setItem('capituloAtual', 'Capitulo 2')
    function escolhasSegundoCapitulo() {
        geral.escolhasPersonagem.forEach(opcao => {
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
        geral.anima('animacao-esquerda', falaPersonagem)
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
            geral.dialogo[0].classList.remove('none')
            geral.dialogo[0].innerHTML = segundaFala
            geral.anima('animacao-esquerda',  geral.dialogo[0])
            setTimeout(() => {
                geral.btnAvancar.classList.remove('none')
                geral.anima('animacao-aparecer', geral.btnAvancar)
                geral.btnAvancar.addEventListener('click', irParaRegiao)
            }, 8000)
        }, 3000)
    }

    function irParaRegiao() {
        geral.btnAvancar.classList.add('none')
        geral.escolhasPersonagem[0].textContent = 'Sou um aventureiro'
        geral.escolhasPersonagem[1].textContent = 'Sou um guerreiro que veio enfrentar Malfagor'
        geral.btnAvancar.removeEventListener('click', irParaRegiao)
        geral.main.adicionarClasse('none')
        document.body.classList.add('carregar-conteudo')
        document.body.append(tituloTrocaDeCenario)
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
                        geral.dialogo[0].classList.add('none')
                        document.body.classList.remove('carregar-conteudo')
                        geral.escolhasPersonagem.forEach(opcao => {
                            opcao.parentElement.classList.remove('none')
                            opcao.addEventListener('click', dialogoAposEscolherRegiao)
                        })
                        geral.main.removerClasse('none')
                        geral.imagemAliado.seletor.setAttribute('src', './image/elfo-floresta.webp')
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
                        geral.dialogo[0].classList.add('none')
                        document.body.classList.remove('carregar-conteudo')
                        falaPersonagem.innerHTML = '<span class="aliado-nome">Desconhecido</span>: Revele-se, estranho, ou enfrente a minha ira'
                        geral.escolhasPersonagem.forEach((opcao) => {
                            opcao.parentElement.classList.remove('none')
                            opcao.addEventListener('click', dialogoAposEscolherRegiao)
                        })
                        geral.imagemAliado.seletor.setAttribute('src', './image/anao-montanha.webp')
                        document.body.classList.add('montanha')

                    }, tempoCarregamentoSecundario)
                }, tempoDeCarregamento)
                break
        }

    }

    function dialogoAposEscolherRegiao(e) {
        geral.escolhasPersonagem.forEach(e => e.removeEventListener('click', dialogoAposEscolherRegiao))
        let respostaEscolhida = e.target.textContent
        geral.dialogo[0].classList.remove('none')
        falaPersonagem.classList.add('none')
        //opcão abaixo defini o que o aliado vai falar de acordo com região e escolha do usuario 
        switch (regiaoEscolhida) {
            case "Floresta Élfica":
                switch (respostaEscolhida) {
                    case "Sou um aventureiro":
                        geral.dialogo[0].innerHTML = 'Ora, Ora, há muito tempos não vejo aventureiros por aqui, pois bem meu nome é <span class="aliado-nome">Aldrin</span> <br>E o que procura na grande floresta elfica ?'
                        break;
                    case "Sou um guerreiro que veio enfrentar Malfagor":
                        geral.dialogo[0].innerHTML = 'HAHAHAH pelo visto é um pequeno comediante, por sinal meu nome é <span class="aliado-nome">Aldrin</span> <br> E como voce acha que vai derrotar Malfagor ?'
                        break;
                }
                localStorage.nomeAliado = 'Aldrin'
                break;

            case "Montanhas Anor":
                switch (respostaEscolhida) {
                    case "Sou um aventureiro":
                        geral.dialogo[0].innerHTML = 'Aventureiro, palavras para mim são como o vento. Demonstre tua coragem. Aqui, sou <span class="aliado-nome">Dúrin</span>, Ferreiro da Montanha. E tu, forasteiro, o que procuras nas Montanhas ?'
                        break;
                    case "Sou um guerreiro que veio enfrentar Malfagor":
                        geral.dialogo[0].innerHTML = 'Guerreiro destemido, o humor é a sua piada? Eu sou <span class="aliado-nome">Dúrin</span>, Ferreiro da Montanha. Enfrentar Malfagor é motivo para risos. Fale, estranho, como pretendes fazê-lo?'
                        break;
                }

                localStorage.nomeAliado = 'Dúrin'
            break    
        }
        geral.anima('animacao-esquerda', geral.dialogo[0])
        geral.anima('animacao-esquerda', geral.escolhasPersonagem)
        geral.escolhasPersonagem.forEach((element) => element.addEventListener('click', escolhaArmaAliado))
        switch (respostaEscolhida) {
            case "Sou um aventureiro":
                geral.escolhasPersonagem[0].textContent = 'Procuro aliados para poder derrotar Malvagor'
                geral.escolhasPersonagem[1].textContent = 'Preciso ficar mais forte para assim conseguir derrotar malvagor'
                break;

            case "Sou um guerreiro que veio enfrentar Malfagor":
                geral.escolhasPersonagem[0].textContent = 'Com a aliança de um valente companheiro com certeza terei sucesso em minha missão'
                geral.escolhasPersonagem[1].textContent = 'Uma boa arma. É isso que preciso e com ela com certeza vou conseguir derrota-lo'
                break;
        }
        
    }

    function escolhaArmaAliado(event) {
        geral.anima('animacao-aparecer', geral.escolhasPersonagem)
        let opcaoEscolhida = event.target.textContent
        geral.escolhasPersonagem.forEach(e => e.textContent = '')
        geral.dialogo[1].classList.remove('none')
        geral.anima('animacao-aparecer', geral.dialogo[0])
        geral.escolhasPersonagem[1].parentElement.classList.add('mostrar-arma')
        geral.escolhasPersonagem.forEach(element => element.removeEventListener('click', escolhaArmaAliado))
        let tempoDeApresentacaoArmas
        if(opcaoEscolhida.startsWith('Procuro') || opcaoEscolhida.startsWith('Com')) {
            tempoDeApresentacaoArmas = 6000
            geral.dialogo[0].innerHTML = `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Bom, talvez esteja na hora de alguem criar coragem e enfrentar malvagor, então eu ${localStorage.nomeAliado}, serei o seu aliado`
            geral.revelarDialogo(3000, geral.dialogo[1], 'animacao-aparecer', `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Para iniciarmos a nossa jornada é necessário escolher uma arma, você pode escolher entre as opções abaixo`)
        } else {
            tempoDeApresentacaoArmas = 6000
            geral.dialogo[0].innerHTML = `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Gostei do que disse. Muito bem, vou te ajudar a alcançar o seu triunfo. Serei o seu aliado nessa jornada`
            geral.revelarDialogo(3000, geral.dialogo[1], 'animacao-aparecer', `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Além disso, vou te presentear com uma arma. Você pode escolher qual delas mais te agrada abaixo`)
        }

        setTimeout(() => {
            geral.anima('animacao-esquerda', geral.escolhasPersonagem)
            geral.escolhasPersonagem.forEach(e => e.addEventListener('click', escolherArma))
            geral.escolhasPersonagem[2].classList.remove('none')
            geral.escolhasPersonagem[0].innerHTML = '<img class="imagem-arma" src="./image/arma-1.png" alt="Machado"><br><span class="arma">Machado da Tempestade</span><span> feito com aço temperado. Pesado e intimidador</span>'
            geral.escolhasPersonagem[1].innerHTML = '<img class="imagem-arma" src="./image/arma-2.png" alt="Espada"><br><span class="arma">Espada da Aurora</span><span> forjada com maestria por hábeis artesãos. Brilha com a luz do amanhecer, refletindo esperança e beleza</span>'
            geral.escolhasPersonagem[2].innerHTML = '<img class="imagem-arma" src="./image/arma-3.png" alt="Cajado"><br><span class="arma">Cajado arcano</span> <span> adornado com entalhes místicos que capturam a essência do desconhecido</span>'
        }, tempoDeApresentacaoArmas)

    }

    function escolherArma(e) {
        geral.dialogo[1].innerHTML = ''
        geral.escolhasPersonagem.forEach(e => e.classList.add('none'))
        let fraseArma
        let armaEscolhida
        switch(e.currentTarget.firstElementChild.getAttribute('alt')){
            case "Machado":
                fraseArma = 'este <span class="arma">poderoso machado</span>'
                armaEscolhida = 'Machado da Tempestade'
            break

            case "Espada":
                fraseArma = 'esta <span class="arma">espada afiada</span>'
                armaEscolhida = 'Espada da Aurora'
            break

            case "Cajado":
                fraseArma = 'este <span class="arma">cajado sagrado</span>'
                armaEscolhida = 'Cajado arcano'
            break
        }
        geral.revelarDialogo(0,geral.dialogo[0], 'animacao-esquerda', `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Com ${fraseArma} você terá grandes chances de derrotar Malvagor`)
        geral.revelarDialogo(3000, geral.dialogo[1], 'animacao-esquerda', `<span class="aliado-nome">${localStorage.nomeAliado}</span>: Isso é tudo que precisamos para iniciar a nossa jornada, está pronto para partir ?`)
        localStorage.setItem('armaEscolhida', armaEscolhida)
        setTimeout(() => {geral.btnAvancar.classList.remove('none')}, 7000)
        geral.revelarDialogo(7000, geral.btnAvancar, 'animacao-aparecer', 'Terminar capitulo')
        geral.btnAvancar.addEventListener('click', finalizarCapitulo)
    }

    function finalizarCapitulo() {
        geral.somMontanha.pause()
        geral.somFloresta.pause()
        geral.main.adicionarClasse('none')
        document.body.className = 'carregar-conteudo'
        clearInterval(somAmbiente)
        geral.anima('animacao-aparecer',tituloTrocaDeCenario)
        tituloTrocaDeCenario.textContent = 'Fim do capitulo 2'
        geral.finalCapitulo(tituloTrocaDeCenario, 'Inicio do capitulo 3', 'terceiro-capitulo')
    }
})