const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums)
{
    if(x == 5)
    {
        break // Break funciona em cima do FOR, WHILE e SWITCH - interrompendo o laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums)
{
    if(y == 5)
    {
        continue // Continue funciona em cima do FOR e WHILE - Pula a repetição atual e vai para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}