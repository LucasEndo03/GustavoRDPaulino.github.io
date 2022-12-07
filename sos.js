addEventListener('DOMContentLoaded', () => {

    policia = document.querySelectorAll('a')[0]
    bombeiro = document.querySelectorAll('a')[1]
    samu = document.querySelectorAll('a')[2]
    filho = document.querySelectorAll('a')[3]
    
    cp = document.createElement('p')
    cp.innerHTML = 'Ligando para polícia...'
    cp.style.fontStyle = 'italic'
    cp.style.fontSize = '1.2rem'
    
    cb = document.createElement('p')
    cb.innerHTML = 'Ligando para bombeiros...'
    cb.style.fontStyle = 'italic'
    cb.style.fontSize = '1.2rem'
    
    cs = document.createElement('p')
    cs.innerHTML = 'Ligando para SAMU...'
    cs.style.fontStyle = 'italic'
    cs.style.fontSize = '1.2rem'
    
    cf = document.createElement('p')
    cf.innerHTML = 'Ligando para filho...'
    cf.style.fontStyle = 'italic'
    cf.style.fontSize = '1.2rem'

    mp = 1
    mb = 1
    ms = 1
    mf = 1
    
    policia.addEventListener('click', function(event){
        mp += 1
        if (mp%2==0){
            policia.appendChild(cp)
        }
        else {
            policia.removeChild(cp)
        }    
    })
    bombeiro.addEventListener('click', function(event){
        mb += 1
        if (mb%2==0){
            bombeiro.appendChild(cb)
        }
        else {
            bombeiro.removeChild(cb)
        }    
    })
    samu.addEventListener('click', function(event){
        ms += 1
        if (ms%2==0){
            samu.appendChild(cs)
        }
        else {
            samu.removeChild(cs)
        }    
    })
    filho.addEventListener('click', function(event){
        mf += 1
        if (mf%2==0){
            filho.appendChild(cf)
        }
        else {
            filho.removeChild(cf)
        }    
    
    
    })
    
    })
    
    