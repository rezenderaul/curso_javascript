function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// While é utilizado em repetição por condição / quantidades de repetições indefinidas
while(opcao !== -1)
{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')