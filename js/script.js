const btnVoltar = document.getElementById('seta-voltar')
const btnAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0

btnAvancar.addEventListener("click", function(){
    const slides = document.querySelectorAll('.slide')
    if(imagemAtual === slides.length -1 ){
        return
    }
    console.log(slides)

    const imagemSelecionada = document.querySelector('.mostrar')
    imagemSelecionada.classList.remove("mostrar")

    // Precisa adiconar ++ para não remover e adicionar as classes na mesma div.
    imagemAtual++

    slides[imagemAtual].classList.add("mostrar") 
})

btnVoltar.addEventListener("click", function(){
    const slides = document.querySelectorAll('.slide')
    if(imagemAtual == 0){
        return
    }

    const imagemSelecionada = document.querySelector('.mostrar')
    imagemSelecionada.classList.remove("mostrar")

    // Precisa adiconar -- para não remover e adicionar as classes na mesma div.
    imagemAtual--

    slides[imagemAtual].classList.add("mostrar") 
})