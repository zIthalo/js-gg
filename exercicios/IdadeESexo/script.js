function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){ //se o ano digitado for = a zero ou o ano digitado for maior que o ano atual então...
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else{ // se não faça
       var fsex = document.getElementsByName('radsex')
       var idade = ano - fano.value //ano menos o ano digitado
       var gênero = '' //gênero recebe string
       var img = document.createElement('img') //com este comando eu é como se eu estivesse criando uma tag img no html e de fato estou a estrutura é: criar uma variável depois colocar no document este "createElement" significa criar uma tag
       img.setAttribute('id', 'foto') //aqui estou criando um id para minha nova tag
       if (fsex[0].checked){ //se o input estiver marcado como masculino então.. (recomendo que abra o site se tiver esquecido)
            gênero = 'Homem'
            if (idade >=0 && idade < 10){ //se a idade deste homem for maior ou igual a zero e a idade for menor que 10 coloque a imagem de uma criança
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jomvemh.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','homem.png')
            }else{
                //Idoso
                img.setAttribute('src','velho.png')
            }
       } else if (fsex[1].checked){ //Agora se for marcado como feminino faça
        gênero = 'Mulher'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src','menina.png')
        } else if(idade < 21){
            //Jovem
            img.setAttribute('src','jovemM.png')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'mulher.png')
        }else{
            //Idoso
            img.setAttribute('src','velha.png')
        }
       }
       res.style.textAlign = 'center' //Inserção de estilo através do JS
       res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos`
       res.appendChild(img) //Aqui eu estou inserindo a minha imagem na div res este comando serve para isso
    }

}