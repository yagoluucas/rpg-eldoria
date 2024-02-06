import * as historiaAldrin from './historia-aldrin.js'
import * as historiaDurin from './historia-durin.js'
window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('capituloAtual', 'Capitulo 3')
    switch(localStorage.nomeAliado) {
        case "Dúrin":
            historiaDurin.historiaDurin()
        break
        
        case "Aldrin":
            historiaAldrin.historiaAldrin()
        break    
    }
})