export function mudarAparenciaElemento(elementoDom , foto, corFundo) {
    if(foto != null) {
        elementoDom.style.backgroundImage = foto;
    }
    if(corFundo != null) {
        elementoDom.style.backgroundColor = corFundo;
    }
}


// função abaixo determinar os textos que será escolhido pelo personagem ao longo do jogo
export function mudarOpcoesEscolhas(capituloPersonagem, regiaoPersonagem, opcoes, escolhaPersonagem) {
    switch (capituloPersonagem){
        case "capitulo 2":
            switch(regiaoPersonagem) {
                case "Floresta Élfica":
                    switch(escolhaPersonagem) {
                        case "Sou um guerreiro que veio enfrentar Malfagor":
                            opcoes[0].textContent = 'Testando'
                            opcoes[1].textContent = 'Testando 2'
                        break    
                    }

                break    
            }
        break    
    }

    return opcoes
}