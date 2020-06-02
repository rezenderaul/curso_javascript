//Armazenando função em variável
const imprimir = function (a, b)
{
    console.log(a + b)
}
imprimir(2, 5)

//Armazenando função arrow em variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))