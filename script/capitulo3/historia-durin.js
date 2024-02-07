import * as geral from '../script.js'
export function historiaDurin() {
    let h1Carregamento = geral.criarH1NoBody('Indo ao topo da montanha')
    geral.funcaoCarregamentoInterativo(h1Carregamento)
    document.body.append(h1Carregamento)
}