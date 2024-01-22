export function mudarAparenciaElemento(elementoDom , foto, corFundo, corLetra) {
    if(foto != null) {
        elementoDom.style.backgroundImage = foto;
    }

    if(corFundo != null && corFundo != undefined) {
        elementoDom.style.backgroundColor = corFundo;
    }

    if(corLetra != null && corLetra != undefined) {
        elementoDom.style.color = corLetra;
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