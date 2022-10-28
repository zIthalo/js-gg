let num = [ 5, 8, 4] //para criar uma array é só declarar uma variável e colocar para ela receber chaves

num.push(2) //significa criar mais um espaço na array e adicionar o valor que estiver dentro dos parênteses neste caso foi o 2. Ou seja, a array que tinha 3 casas agora passará a ter 4
num.sort() // este comando vai colocar todos os números em ordem crescente
console.log(num)
console.log (`O vetor tem ${num.length} posições`)//num.length serve para mostrar quantas posiçoes ou casas a array tem
console.log (num [1]) //quero o valor de num na posição 2. Comando que serve para mostrar os valores em cada posição = [1] de cada vetor= array
let pos = num.indexOf(8)
//OBS: se a var.push() estiver depois do comando sort, independente se o número for menor ou não ele irá para o final, agora se colocar antes do comando var.sort() o número irá ficar em ordem crescente mesmo.
console.log(`O valor 8 está na posição ${pos}`)
for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}