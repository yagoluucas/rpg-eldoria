export function mudarAparenciaElemento(elementoDom , foto, corFundo) {
    if(foto != null) {
        elementoDom.style.backgroundImage = foto;
    }
    if(corFundo != null) {
        elementoDom.style.backgroundColor = corFundo;
    }
}

export function anima(nomeAnimacao, elemento) {
    if(elemento.length !== undefined) {
        elemento.forEach((e) => {
            e.classList.add(nomeAnimacao)
            setTimeout(() => {
                e.classList.remove(nomeAnimacao)
            }, 1000)
        })
    } else {
        elemento.classList.add(nomeAnimacao)
        setTimeout(() => {
            elemento.classList.remove(nomeAnimacao)
        }, 1000)
    }
}