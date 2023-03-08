function carregar(){
    var msg = document.getElementById ('msg')
    var img = document.querySelector('img#img')
    // Todo o defeito estava aqu, eu estava selecionando o id da div e não da img mais uma vitória para ithalo \o/
    var data = new Date()
    var hora = 10
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = '../img/dia.png'
        document.body.style.background = '#3e72d7'
    } else if (hora > 12 && hora < 18){
        //Boa tarde
        img.src = '../img/tarde.png'
        document.body.style.background = '#ffa010'
    } else {
        //Boa noite
        img.src = '../img/noite.png'
        document.body.style.background = '#372d48'
    }
}