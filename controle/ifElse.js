const imprimirResultado = function (nota)
{
    if(nota >= 7)
    {
        console.log('Aprovado!')
    } else
    {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(3)
imprimirResultado('Whops!') // Tratar dados, por ser fracamente tipada, aceita qualquer valor