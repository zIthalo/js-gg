function carregar(){
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'diaball25.png'
        document.body.style.background = '#3e72d7'
    } else if (hora > 12 && hora <18){
        //Boa tarde
        img.src = 'tardeball25.png'
        document.body.style.background = '#ffa010'
    } else {
        //Boa noite
        img.src = 'noiteball25.png'
        document.body.style.background = '#372d48'
    }
} 