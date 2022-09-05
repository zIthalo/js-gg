let valores = [8, 1, 7, 4, 2, 9,]
valores.sort()

/*for(let pos=0; pos<valores.length; ++pos){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*num.indexOf(7) é para saber em qual índice está o valor 7*/ 