const fabricantes = ['Mercedes', 'Audi', 'bmw']

function imprimir(nome, indice)
{
    console.log(`${indice + 1 } - ${nome}`)
}

//Callback - chamar de volta
//A cada item encontrado, chama a função imprimir
fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))