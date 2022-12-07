addEventListener('DOMContentLoaded', () => {

    confirmar = document.querySelector('a')

    mensagem = document.createElement('p')
    mensagem.innerHTML = 'Pedido confirmado'
    mensagem.style.border = '1px solid green'
    mensagem.style.padding = '1rem'
    mensagem.style.backgroundColor = 'green'

    confirmar.addEventListener('click', function(event){
        confirmar.innerHTML = ''
        confirmar.style.padding = '0rem'
        confirmar.appendChild(mensagem)

})
})