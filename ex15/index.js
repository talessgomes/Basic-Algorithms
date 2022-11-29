let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    let checkingFood = foods[scannedItem];
    return checkingFood;
    // Only change code above this line
}


console.log(checkInventory("apples")); //25
console.log(checkInventory("bananas")); //13

/*Neste desafio eu vou verificar a quantidade que existem de um produto,
console.log vai chamar os itens para verificar se existem. o meu retorno
vai ser a quantidade de cada item que está indo para o meu parâmetro. */