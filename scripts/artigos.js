const salvarDadosArtigo = {
    index: 0,
 
    salvar() {
        //salva o titulo e o corpo do artigo criado
        const salvarTitulo = document.querySelector('#tituloArtigo').value
        const salvarCorpo = document.querySelector('#bodyArtigo').value
        //seleciona a tecnoligia (tema) do artigo
        const tecnologiaEscolhida = document.querySelector('#selecionarTecnologia').value
 
        //verifica se algum campo está vazio, e n deixa enviar o artigo caso esteja.
        if( salvarTitulo == "" || salvarCorpo == "") {
            return alert('não é possível enviar seu artigo. confira todas as informações e veja se não está faltando nada.')
        }
     
        return {tecnologia: tecnologiaEscolhida ,titulo: salvarTitulo, corpo: salvarCorpo}
    },
 
    retomarValorInicial() {
        const nenhumaPublicacao = document.querySelector('.nenhuma-publicacao')
 
        if(nenhumaPublicacao.style.display != "none") {
            nenhumaPublicacao.style.display = "none"
        }
        // limpa os inputs de título e corpo
        document.querySelector('#tituloArtigo').value = ""
        document.querySelector('#bodyArtigo').value = ""
    },
 
    imprimir({tecnologia , titulo, corpo}) {
        function tipoArtigo(tecnologiaEscolhida) {
            return {classe: `lista-${tecnologiaEscolhida}`, imagem: `${tecnologiaEscolhida}-icon.png`}
        }

        const estiloArtigo = tipoArtigo(tecnologia)

        const  printarNaTela = `
        <li class="lista-artigo ${estiloArtigo.classe} " >
            <img id="excluirArtigo" class="fechar-artigo" src="./images/fechar-artigo.png" alt="">
            <img src="./images/${estiloArtigo.imagem}" alt="">
         
            <article>
                <h3 class="titulo-artigo">${titulo}</h3>
                <p class="descricaoArtigo">
                    ${corpo}
                </p>
            </article>
        </li> 
        `   
        let mostrarNaTela = document.querySelector('#meus-artigos')
        mostrarNaTela.innerHTML += printarNaTela

        const excluirArtigo = document.querySelector('#excluirArtigo')
        excluirArtigo.addEventListener('click', (event) => {
            event.target.parentElement.remove()
        })

        salvarDadosArtigo.retomarValorInicial()
        return mostrarNaTela
     },

     click() {
        const botão = document.querySelector('#enviarArtigo')
        botão.addEventListener('click', (event) => {
            event.preventDefault()
            salvarDadosArtigo.imprimir(salvarDadosArtigo.salvar())
        })
     }
 }

 export { salvarDadosArtigo }