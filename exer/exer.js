function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora é ${hora} horas e ${min} minutos`
    
    if(hora >= 0 && hora < 12) {
        img.src = '../img/dia.jpg'
        document.body.style.background = 'rgb(248, 176, 116)'
    } else if (hora >= 12 && hora < 18){
        img.src = '../img/tarde.jpg'
        document.body.style.background = 'rgb(70, 142, 236)'
    } else{
        img.src="../img/noite.jpg"
        document.body.style.background = 'rgb(28, 33, 85)'
    }


}
