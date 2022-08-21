/*var agora = new Date()//Usar sempre este comando para pegar a hora do seu pc sempre o new Date(). Sempre inicie com este comando
var hora = agora.getHours()// Aqui abaixo você colocar o agora recebendo a função . getHours() para a var agora pegar somente as horas
var minutos = agora.getMinutes() //e aqui para pegar os minutos
    console.log(`Agora são ${hora} horas e ${minutos} minutos`)
if(hora <= 12){
    console.log ('Bom dia!')
} else if(hora >= 12 && hora <= 18){
    console.log ('Boa tarde!')
}else{
    console.log('Boa noite!')
}*/

var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
    console.log ('Seja bem vindo(a)')
if (hora < 12 && hora > 0 && minuto == 0){
    console.log(`Bom dia! Agora são ${hora}:${minuto}`)
} else if (hora >= 12 && hora <= 18){
    console.log(`Boa tarde! Agora são ${hora}:${minuto}`)
} else{
    console.log(`Boa noite! Agora são ${hora}:${minuto}`)
}