function mixedNumbers(arr) {
    // Only change code below this line
      arr.unshift('I', 2, 'three');
      arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  
  /*Como o retorno da função vai ser no parâmetro, eu devo pegar
  o valor do parâmetro e usar unshift e o push.
  
  unshift vai colocar os valores no começo do array e o push no final */