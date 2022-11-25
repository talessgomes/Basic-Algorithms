function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

/*O restorno é um array vazio, pois ele não está pegando
o parâmetro, assim, eu vou colocar a variável newArr
dentro do while, passar a cópia do parâmetro e
assim jogar as informações dentro do array vazio,
então o retorno vai ser a cópia do que eu passei */

console.log(copyMachine([true, false, true], 2));

/*Exemplo
 
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; // cópia do array de cima
 */