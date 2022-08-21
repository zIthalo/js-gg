/*var idade = 12 //Aqui se define a idade do eleitor
console.log(`Você tem ${idade} anos de idade.`)
if (idade < 16){ //Se a idade for maior que 16 então
    console.log('Não vota')
} else if (idade < 18 || idade > 65){//Senão se a idade for menor que 18 ou for maior que 65 faça
    console.log('Vota se quiser.')
}else{ //se não for nenhuma dessas opções
    console.log("Voto obrigatório.")
}*/

var idade = 25
    console.log(`Você possui ${idade} anos.`)
if (idade < 16){
    console.log('Não votarás.')
}else if (idade < 18 || idade > 65){
    console.log('Vota se quiser, mas não recomendo.')
}else{
    console.log('Tem que votar.')
}