function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <12){
        //Bom dia.
    }else if (hora >= 12 && hora < 18){
        //Boa tarde.
    }else if (hora > 18) {
        //Boa noite.
    }
}