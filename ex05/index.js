const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 1);
arr.splice(3, 4);
// Only change code above this line
console.log(arr); // [ 4, 5, 1 ]

// Removi duas vezes, para que o valor final do array desse o resultado 10;

/* EXEMPLO

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2); // ['really', 'happy'];

.splice é usado para remover os valores, até mesmo fazer um novo array
como aconteceu com a variável newArray.
Foi pego o index 3 do array e removeu dois elementos para poder guardar
na variável
 */