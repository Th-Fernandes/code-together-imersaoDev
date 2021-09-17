// funcionalidade de abrir e fechar o modal
const modal = {
    abrir() {
        document.querySelector('.modal-overlay').classList.add('modal-actived')
    },

    fechar() {
        document.querySelector('.modal-overlay').classList.remove('modal-actived')
    }
}

const salvarDadosArtigo = {
    salvar() {
        const salvarTitulo = document.querySelector('#tituloArtigo').value
        const salvarCorpo = document.querySelector('#bodyArtigo').value

        const tecnologiaEscolhida = document.querySelector('#selecionarTecnologia').value

        let printarNaTela;

        if(tecnologiaEscolhida == 'html') {
            printarNaTela = `
            <li class="lista-artigo lista-html ">
            <img src="./images/html-icon.png" alt="">
            
            <article>
                <h3 class="titulo-artigo">${salvarTitulo}</h3>
                <p class="descricaoArtigo">
                    ${salvarCorpo}
                </p>
            </article>
             </li> 
             ` 
        } else if (tecnologiaEscolhida == 'css') {
            printarNaTela = `
            <li class="lista-artigo lista-css ">
            <img src="./images/css-icon.png" alt="">
            
            <article>
                <h3 class="titulo-artigo">${salvarTitulo}</h3>
                <p class="descricaoArtigo">
                    ${salvarCorpo}
                </p>
            </article>
             </li> 
             ` 
        } else if (tecnologiaEscolhida == 'javascript') {
            printarNaTela = `
            <li class="lista-artigo lista-js">
            <img src="./images/js-icon.png" alt="">
            
            <article>
                <h3 class="titulo-artigo">${salvarTitulo}</h3>
                <p class="descricaoArtigo">
                    ${salvarCorpo}
                </p>
            </article>
             </li> 
             `
        }

       
        let mostrarNaTela = document.querySelector('#meus-artigos')
        mostrarNaTela.innerHTML  = mostrarNaTela.innerHTML + printarNaTela

        const nenhumaPublicacao = document.querySelector('.nenhuma-publicacao').style.display = 'none'

        modal.fechar()

        return mostrarNaTela
    }
}