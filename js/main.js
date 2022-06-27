const form = document.getElementById('novoItem')
const teste = document.getElementById('teste')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    criaElemento(evento.target['nome'].value, evento.target['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
   

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    const lista = document.getElementById("lista")
    lista.appendChild(novoItem)
}









teste.addEventListener("mouseover", (evento) => {
    evento.target.style.fontSize = "23px"
    evento.target.style.color = "blue"
    evento.target.style.transition =  "0.2s"
    })

teste.addEventListener("mouseout", (evento) => {
    evento.target.style.fontSize = ""
    evento.target.style.color = ""
    evento.target.style.transition =  "0.2s"
    })    