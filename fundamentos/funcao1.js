//Função sem retorno
function imprimirSoma(a, b)
{
    console.log(a+b)
}

imprimirSoma(2,5)
imprimirSoma(2) //NaN
imprimirSoma(2,10, 3 , 4, 8, 9) // Interpreta apenas os parâmetros informados na função, ignorando o restante
imprimirSoma() //NaN