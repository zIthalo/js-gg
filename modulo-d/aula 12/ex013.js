/*var agora = new Date() //Aquele comando básico e primordial se você quiser pegar horas dias meses e anos e etc
var diaSem = agora.getDay()//a var diaSem está recebendo a var agora que está recebendo a função getDay()
switch(diaSem){//se lê escolha o dia da semana
    case 0: //caso o número do dia da semana for 0
        console.log('Domingo') //Escreva no console
        break //não esquecer nunca de colocar o brak no final de cada switch case
    case 1:
        console.log('Segunda')
        break //se não colocar o break o comando ficará em loop infinito
    case 2:
        console.log('Terça')    
        break
    case 3:
        console.log('Quarta')    
        break
    case 4:
        console.log('Quinta')        
        break
    case 5: 
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')    
        break
    default: //Este default é como se fosse o se não do if else
        console.log('[ERRO] Dia inválido.')//se não for nenhuma das altarnativas acima faça este comando aqui
}//Só se fecha o bloco do switch depois do default
//no final do default não é obrigatório colocar o break*/

var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minuto = agora.getMinutes()
switch(diaSem){
    case 0:
        console.log(`Domingo. São ${hora} : ${minuto}`)
    break
    
    case 1:
        console.log(`Segunda-Feira. São ${hora} : ${minuto}`)
    break

    case 2:
        console.log(`Terça-Feira. São ${hora} : ${minuto}`)
    break

    case 3:
        console.log(`Quarta-Feira. São ${hora} : ${minuto}`)
    break

    case 4:
        console.log(`Quinta-Feira. São ${hora} : ${minuto}`)
    break

    case 5:
        console.log(`Sexta-Feira. São ${hora} : ${minuto}`)
    break

    case 6:
        console.log(`Sábado. São ${hora} : ${minuto}`)
    break

    default:
        console.log ('[ERRO] Dia inválido.')
}   
// aperfeiçoei todo o código o switch case ele só serve para valores pontuais e não para intervalos de tempo como o if else
// use apenas strings e números