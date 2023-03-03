//EXERCÍCIO 1

const numeroRecebido = Number(prompt('Insira um número para iniciar a verificação:'))

// if(numeroRecebido % 2 !== 0){
//     if(numeroRecebido % 3 !== 0 ){
//         console.log(`O número ${numeroRecebido} não é divisível por 2 ou por 3.`)
//     }else{
//         console.log(`O número ${numeroRecebido} é divisivel por 2 ou por 3. `)
//     }
// }else{
//     console.log(`O número ${numeroRecebido} é divisivel por 2 ou por 3. `)
// }


if(numeroRecebido % 2 === 0 || numeroRecebido % 3 === 0){
    console.log(`O número ${numeroRecebido} é divisivel por 2 ou por 3. `)
} else {
    console.log(`O número ${numeroRecebido} não é divisível por 2 e não é divisível por 3.`)
}