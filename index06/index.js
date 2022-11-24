function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/*Neste exercício, eu vou usar splice, pegando o parâmetro arr, onde vou retirar
os valores [''DarkGoldenRod', 'WhiteSmoke'], vou colocar outros valores
no lugar do array. Assim retornando o novo valor do arr. */

/* EXEMPLOS
 
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
 
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //[ 10, 11, 12, 13, 14, 15 ]
 
Neste exemplo, eu vou pegar o valor do index que é 3 (startIndex) e será
deletado 1 (amountDelete), tirando o número 12 e vai ser passado
o valor 14,15
 
 */