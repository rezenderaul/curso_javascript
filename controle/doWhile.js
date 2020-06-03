function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// Do while é utilizado em repetição por condição / quantidades de repetições indefinidas
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while(opcao !== -1)

console.log('Até a próxima!')