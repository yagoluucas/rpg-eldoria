export function mudarAparenciaElemento(elementoDom , foto, corFundo) {
    if(foto != null) {
        elementoDom.style.backgroundImage = foto;
    }
    if(corFundo != null) {
        elementoDom.style.backgroundColor = corFundo;
    }
}