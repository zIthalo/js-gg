
    // seu codigo aqui
    /**Troposfera: essa camada se estende até 20 km do solo;
Estratosfera: a estratosfera chega a 50 km do solo;
Mesosfera: o topo da mesosfera fica a 80 km do solo;
Termosfera: o topo da termosfera fica a  450 km acima da Terra;
Exosfera: a camada superior da atmosfera fica a  900 km acima da Terra. */
    
    import { question } from 'readline-sync';
    let alt = Number(question('Digite a altitude da nave: '))

    if(alt <= 20){
        console.log(`Você está a ${alt}km do solo. \nVocê está na Troposfera.`)
    }else if(alt <= 50 || alt > 20){
        console.log(`Você está a ${alt}km do solo. \nVocê está na Estratosfera.`)
    }else if(alt <= 80 || alt > 50){
        console.log(`Você está a ${alt}km do solo. \nVocê está na Mesosfera`)
    }else if(alt <= 450 || alt > 80){
        console.log(`Você está a ${alt}km do solo. \nVocê está na Termosfera`)
    }else{
        console.log(`Você está a ${alt}km do solo. \nVocê está na Exosfera`)
    }
    
