function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));//0

/*O filtro vai verificar se o elemento que tem dentro do array for igual o que
estiver fora, o array não vai ser colocado na função. Ele só vai dar
o push nos arrays que não tiverem o mesmo valor que tem no elem.
Como todos os arrays tem 3, nenhum deles vai retornar*/


/* Exemplo
 
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
 
greaterThanTen([2, 12, 8, 14, 80, 0, 1]); // [12, 14, 80]
 */