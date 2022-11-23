function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
  //[ 'challenge', 'complete' ]

/*Esse desafio vai pegar o array que está no parâmetro arr,
e será removido dele os valores e eles serão jogados nas variáveis popped
e shifted. O retorno da função vai ser um array das duas variáveis que 
estão sendo declaradas. assim o retorno será  [ 'challenge', 'complete' ]*/

/*
exemplos
 
let greetings = ['whats up?', 'hello', 'see ya!'];
 
greetings.pop(); // ['whats up?', 'hello']
 
.pop remove o elemento do final do array
 
greetings.shift(); //['hello']
 
.shift remove o elemento do começo do array
 
*/