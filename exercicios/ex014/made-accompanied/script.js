function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}`
    //Sempre, mas sempre mesmo dava erro nas fotos. E por quê? Porque as fotos estavam em outra pasta fora da pasta que eu estou codando neste caso eu tinha duas opções, ou colocar as fotos na mesma pasta ou utilizar a técnica do ../ para voltar uma pasta, ou seja: voltei uma pasta utilizando ../, depois coloquei o nome da pasta, que no caso é img e depois selecionei as imagens pelo nome e extensão ex dia.png
    if (hora >= 0 && hora < 12){
        //Bom dia.
        img.src = '../img/dia.png'
        document.body.style.background = 'rgb(65, 192, 242)'

    }else if (hora >= 12 && hora < 18){
        //Boa tarde.
        img.src = '../img/tarde.png'
        document.body.style.background = '#E86C07'
    }else{
        //Boa noite.
        img.src = '../img/noite.png'
        document.body.style.background = '#9479AF'
        //para mudar algum estilo no site nunca esquecer de colocar o .style!!!!!
    }
}