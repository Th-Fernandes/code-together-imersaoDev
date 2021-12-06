import { salvarDadosArtigo } from './scripts/artigos.js'
import { modal } from './scripts/modal.js'

modal.alterarEstado()

salvarDadosArtigo.click()

function fecharJanela() {
    const selecionarArtigo =  document.querySelector('.excluir-artigo')

    selecionarArtigo.style.display = "none"
}