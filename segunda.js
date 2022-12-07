addEventListener('DOMContentLoaded', () => {

    var contador = parseInt(localStorage.getItem('contador'))
    remedio = document.querySelectorAll('.li')[1]

    mode = 1
    mode+=contador
    if (mode%2==0){     
        remedio.innerHTML = localStorage.getItem('nome') +' '+ localStorage.getItem('hora') 
    }
    else{
        remedio.innerHTML = 'Lorem Ipsum'  
    }
})
