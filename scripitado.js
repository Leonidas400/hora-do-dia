function carregar(){
    var mens = document.getElementById('msg2')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}h${minutos}m`
    
    if(hora >=0 && hora < 12){
        //bono dia!
        mens.innerHTML = 'Tenha um ótimo dia ;)'
        img.src = 'manha2.pgn'
        document.body.style.background - '#a8b2ba'
    }else if(hora >= 12 && hora < 19){
        //bo tarde!
        mens.innerHTML = 'Que a sua tarde seja excelente ;)'
        img.src = 'tarde2.png'
        document.body.style.background = '#e49980'
    }else{
        //banotche
        mens.innerHTML = 'Que você tenha uma boa noite  ;)'
        img.src = 'noite2.png'
        document.body.style.background = '#487f9d'
    }

}