import { modal } from './modal.js'

const artigos = {
    lista: [],
    ampliar() {
 
    }
 }
 
 const salvarDadosArtigo = {
     index: 0,
 
     salvar() {
         //salva o titulo e o corpo do artigo criado
         const salvarTitulo = document.querySelector('#tituloArtigo').value
         const salvarCorpo = document.querySelector('#bodyArtigo').value
 
         //verifica se algum campo está vazio, e n deixa enviar o artigo caso esteja.
         if( salvarTitulo == "" || salvarCorpo == "") {
             return alert('não é possível enviar seu artigo. confira todas as informações e veja se não está faltando nada.')
         }
         //seleciona a tecnoligia (tema) do artigo
         const tecnologiaEscolhida = document.querySelector('#selecionarTecnologia').value
         //mandando os dados para poder imprimir o artigo no modal de ampliar artigo
         modal.imprimirArtigo(salvarTitulo, salvarCorpo)
         // cria uma chave unica para imprimir posteriormente o artigo no modal ampliado
         this.index++
         const criarChave = 'artigo' + this.index
 
         let arrayIndex = 0
 
         artigos.lista.push({
             titulo: salvarTitulo, 
             corpo: salvarCorpo, 
             chave: criarChave, 
 
             ampliar(){
 
                 const tituloArtigo = document.querySelector('.modal__titulo');
                 const corpoArtigo = document.querySelector('.modal__artigo');
             
                 const botaoAmpliar = document.querySelector(`#artigo${arrayIndex + 1}`).addEventListener("click" , () => {
                     modal.ampliar()
                     tituloArtigo.innerText = artigos.lista[arrayIndex].titulo
                     corpoArtigo.innerText = artigos.lista[arrayIndex].corpo
                 })
 
                arrayIndex++    
         } 
     })
     
         return {tecnologia: tecnologiaEscolhida ,title: salvarTitulo, body: salvarCorpo}
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
 
     imprimir({tecnologia ,title: titulo, body: corpo}) {
     
         let estiloArtigo = { classe: undefined, imagem: undefined }
 
         if(tecnologia == 'html') {
            estiloArtigo = { classe: 'lista-html', imagem: 'html-icon.png' }
         } else if (tecnologia == 'css') {
             estiloArtigo = { classe: 'lista-css', imagem: 'css-icon.png' }
         } else if (tecnologia == 'javascript') {
             estiloArtigo = { classe: 'lista-js', imagem: 'js-icon.png' }
         }
 
         let  printarNaTela = `
         <li class="lista-artigo ${estiloArtigo.classe} " >
         <img  onclick="fecharJanela" class="fechar-artigo" src="./images/fechar-artigo.png" alt="">
         <img id="${artigos.lista[artigos.lista.length - 1].chave}"  src="./images/${estiloArtigo.imagem}" alt="">
         
         <article>
             <h3 class="titulo-artigo">${titulo}</h3>
             <p class="descricaoArtigo">
                 ${corpo}
             </p>
         </article>
          </li> 
          `   
         let mostrarNaTela = document.querySelector('#meus-artigos')
         mostrarNaTela.innerHTML  = mostrarNaTela.innerHTML + printarNaTela
 
         artigos.ampliar()
 
         modal.fechar()
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