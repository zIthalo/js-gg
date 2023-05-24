// // let nasc1 = 1997
// // let ano1 = 2023

// // let idade1 = ano1 - nasc1

// // console.log("A sua idade é " + idade1 + " anos.")

// let data = new Date()
// let ano = data.getFullYear()
// const nasc = 1997

// const idade = ano - nasc

// console.log(`Você tem ${idade} anos.`)

// if (idade > 18){
//     console.log(`Você é maior de idade.`)
// }else{
//     console.log(`Você é menor de idade.`)
// }

// Cria o vetor com 10 posições
let vetor = new Array(10);

vetor = [3,5,8,7,9,10,15,8,9,32]

// Lê os valores do vetor
for (let i = 0; i < 10; i++) {
    vetor[i] = prompt("Digite o valor da posição " + i + ":");
}

// Ordena o vetor usando o algoritmo de seleção
for (let i = 0; i < 9; i++) {
    let indexMin = i;
    for (let j = i + 1; j < 10; j++) {
        if (vetor[j] < vetor[indexMin]) {
            indexMin = j;
        }
    }
    let temp = vetor[i];
    vetor[i] = vetor[indexMin];
    vetor[indexMin] = temp;
}

// Exibe o vetor ordenado
alert("Vetor ordenado: " + vetor.join(", "));
