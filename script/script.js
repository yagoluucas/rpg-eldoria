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