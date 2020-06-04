let dobro = function (a)
{
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2 //Retorno explícito - Usar quando há somente uma única instrução/linha de código
console.log(dobro(3))

let ola = function ()
{
    return 'Olá'
}

// Se utilizar as chaves/colchetes deve-se colocar obrigatoriamente o return
ola = () => 'Olá'
ola = _ => 'Olá' //Possui um parâmetro, apesar do JS o ignorar, se não for passado
console.log(ola())