{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera) //Escopo global, fora de uma função

function teste()
{
    var local = 123
    console.log(local)
}

console.log(local) //Erro, pois a variável estava dentro de uma função