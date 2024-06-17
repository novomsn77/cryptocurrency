const btnPeguntar = document.querySelectorAll(".ask button")
const articleTexto = document.querySelectorAll(".answer p")


btnPeguntar.forEach((ask, index) =>{
    ask.addEventListener('click', () =>{
        articleTexto.forEach((answer) =>{
            answer.classList.remove('active')
        })
        btnPeguntar.forEach((ask) => {
            ask.classList.remove('active')
        })
        btnPeguntar[index].classList.add('active')
        articleTexto[index].classList.add('active')
    })
})