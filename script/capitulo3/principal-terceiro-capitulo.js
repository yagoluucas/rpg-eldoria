import * as historiaAldrin from './historia-aldrin.js'
import * as historiaDurin from './historia-durin.js'
import * as geral from '../script.js'
(() => {
    window.addEventListener('DOMContentLoaded', () => {
        localStorage.setItem('capituloAtual', 'Capitulo 3')
        let verificarPersonagemEscolhido = localStorage.nomeAliado == 'Dúrin'
        document.body.classList.add(`${verificarPersonagemEscolhido ? 'fundo-durin' : 'fundo-aldrin'}`)
        geral.imagemAliado.seletor.setAttribute('src', `${verificarPersonagemEscolhido ? '../image/anao-montanha.webp' : '../image/elfo-floresta.webp'}`)
        geral.imagemAliado.seletor.setAttribute('alt', verificarPersonagemEscolhido ? 'imagem anão' : 'imagem elfo')
        geral.revelarDialogo(0, geral.dialogo[0], 'animacao-esquerda', `<span class="aliado-nome">${localStorage.getItem('nomeAliado')}</span>: Mesmo tendo eu como aliado e uma arma forte como ${localStorage.getItem('armaEscolhida') == 'Espada da Aurora' ? 'a' : 'o'} ${localStorage.getItem('armaEscolhida')}, nós precisamos ter um exercito inteiro para derrotar Malvagor e a sua tropa, por esse motivo precisamos ${verificarPersonagemEscolhido ? 'ir até o topo da montanha e falar com o rei dos anões' : 'ir até o centro da floresta e falar com o rei dos elfos'}`)
        setTimeout(() => {
            geral.btnAvancar.classList.remove('none')
            geral.btnAvancar.classList.add('animacao-aparecer')
            geral.btnAvancar.addEventListener('click', iniciarCapitulo)
        }, 4000)

        function iniciarCapitulo() {
            geral.main.adicionarClasse('none')
            document.body.className = 'carregar-conteudo'
            geral.btnAvancar.removeEventListener('click', iniciarCapitulo)
            verificarPersonagemEscolhido ? historiaDurin.historiaDurin() : historiaAldrin.historiaAldrin()
        }
    })
})()