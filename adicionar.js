addEventListener('DOMContentLoaded', () => {

    confirmar = document.querySelector('.a')

    mensagem = document.createElement('p')
    mensagem.innerHTML = 'Remédio adicionado'
    mensagem.style.border = '1px solid green'
    mensagem.style.padding = '1rem'
    mensagem.style.backgroundColor = 'green'

    confirmar.addEventListener('click', function(event){
        confirmar.innerHTML = ''
        confirmar.style.padding = '0rem'
        confirmar.appendChild(mensagem)
})

    contador = 0
    confirmar.addEventListener('click', function(event){
        contador+=1
        var nome = document.querySelector('#nome').value 
        var hora = document.querySelector('#hora').value
        localStorage.setItem('nome',nome)
        localStorage.setItem('hora',hora)
        localStorage.setItem('contador',contador)
    })

})