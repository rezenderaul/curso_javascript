let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero )
}
console.log('Fora ', numero)

//Let tem escopo global, de função e de blocos
//Caso não exista uma variável let no escopo, ele irá procurar no escopo maior e no global