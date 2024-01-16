window.addEventListener('DOMContentLoaded', () => {
    let events = ['click', 'keyup']
    let nomeUsuario;
    const paragrafoApresentacao = document.querySelector('.js-paragrafo-apresentacao')
    const inputPassarNome = document.querySelector('.js-input-passar-nome')
    const btnNome = document.querySelector('.js-informar-nome')
    const paragrafoPassouNome = document.querySelector('.js-passou-nome')
    const btnComecarJornada = document.querySelector('.js-comecar-jornada-btn')
    events.forEach((e) => {
    btnNome.addEventListener(e, (event) => {
            if (event.key === 'Enter' || event.type === 'click') {
                nomeUsuario = inputPassarNome.value
                paragrafoPassouNome.textContent = `Olá ${nomeUsuario} !`
                setTimeout(() => {
                    paragrafoApresentacao.innerHTML = `Bem-vindo ao nosso reino encantado <span class="bold">${nomeUsuario}</span>, onde a magia permeia cada raio de sol e murmúrios da brisa. Prepare-se para uma jornada além dos limites da imaginação, onde o extraordinário se torna rotina e os encantos do inexplorado aguardam sua descoberta`
                    paragrafoApresentacao.classList.add('animacao-esquerda')
                }, 1000)

                setTimeout(() => {
                    btnComecarJornada.classList.remove('none')
                    btnComecarJornada.classList.add('animacao-aparecer')
                }, 4000)
            }
        })
    })
    
})