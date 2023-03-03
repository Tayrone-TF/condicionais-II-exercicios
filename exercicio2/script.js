let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }

switch (nacionalidade) {
    case 'brasileira':
        console.log(`Que legal!!! Você é do Brasil.`)
        break

    case 'argentina':
        console.log(`Que legal!!! Você é da Argentina.`)
        break

    case 'uruguaia':
        console.log(`Que legal!!! Você é do Uruguai.`)
        break

    case 'chilena':
        console.log(`Que legal!!! Você é do Chile.`)
        break

    case 'colombiana':
        console.log(`Que legal!!! Você é da Colombia.`)
        break
    
    default :
        console.log(`Não conseguimos identificar qual o seu país :(`)
}