// funcionalidade de abrir e fechar o modal criador de artigo
const modal = {
    alterarEstado() {
        //seleciona os botões que receberão a propriedade de alterar a visibilidade do modal
        const botoes = [document.querySelector('#fazerArtigo'), document.querySelector('#cancelarArtigo'), document.querySelector('#enviarArtigo')]
        // varre todos os botões do array acima, e adiciona a funcionalidade a eles.
        for(let botao of botoes) {
            botao.addEventListener('click', () => {
                const alterarModal = document.querySelector('.modal-overlay').classList.toggle('modal-actived') 
            })
        }
    },
}

export { modal }