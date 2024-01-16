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

export function mudarTexto (primeiroParagrafo, textoPrimeiroParagrafo, segundoParagrafo, textoSegundoParagrafo) {

    if(primeiroParagrafo != null && textoPrimeiroParagrafo != null) {
        primeiroParagrafo.textContent = textoPrimeiroParagrafo
    }

    if(segundoParagrafo != null && textoSegundoParagrafo != null) {
        segundoParagrafo.textContent = textoSegundoParagrafo
    }

}