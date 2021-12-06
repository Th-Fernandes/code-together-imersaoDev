// funcionalidade de abrir e fechar o modal criador de artigo
const modal = {
    /*
    abrir() {
        const botãoAtivador = document.querySelector('#fazerArtigo')
        botãoAtivador.addEventListener('click', () => {
            const abrirModal = document.querySelector('.modal-overlay').classList.add('modal-actived')
        })
    },
    */

    fechar() {
       const modals = document.querySelectorAll('.modal-overlay')
       
       for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('modal-actived')
       }
    },

    alterarEstado() {
        const botoes = [document.querySelector('#fazerArtigo'), document.querySelector('#cancelarArtigo')]

        for(let botao of botoes) {
            botao.addEventListener('click', () => {
                const alterarModal = document.querySelector('.modal-overlay').classList.toggle('modal-actived') 
            })
        }
    },

    ampliar() {
        document.querySelector('.modal-overlay.modal-ampliar').classList.add('modal-actived');
    },
    //mostra os dados do artigo no modal de ampliar o artigo.
    imprimirArtigo(titulo, corpo) {
        const tituloArtigo = document.querySelector('.modal__titulo');
        const corpoArtigo = document.querySelector('.modal__artigo');
    }
}

export { modal }