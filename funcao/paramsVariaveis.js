function soma()
{
    let soma = 0
    for (i in arguments)
    {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 5))
console.log(soma(4, 5.5, 7))
console.log(soma(6, 8, 1, 'Teste'))
console.log(soma('a', 'b', 'c'))