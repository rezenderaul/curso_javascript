// Recurso do ES2015

function rand({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {min: 50, max: 100}
console.log(rand({min: 50, max: 100}))
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
//console.log(rand()) //Erro