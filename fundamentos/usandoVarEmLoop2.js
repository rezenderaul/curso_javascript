const funcs = []

for(var i = 0; i < 10; i++)
{
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]() //Retorna 10, que é a saída do loop, pelo fato do var ter executado dentro dos parênteses
funcs[8]() //Retorna 10, que é a saída do loop, pelo fato do var ter executado dentro dos parênteses