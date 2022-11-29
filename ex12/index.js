let myNestedArray = [
    // Only change code below this line
    [
        [
            'deep',
            2,
            [
                'deeper',
                false,
                ['deepest', 7, true]
            ]
        ]
    ],
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
];

console.log(myNestedArray.length)
  /*Neste desáfio, eu vou criar um array com os objetos sendo passados,
como vou criar o número 0, ainda vão contiuar tendo os 5. */

/*
Exemplo
 
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ], // 1
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?'] // 0 e o elemento 0
      ] // 0 do nível 2
    ] // 1 do nível 2
  ] // 2
];
 
console.log(nestedArray[2][1][0][0][0]); //deepest-est?
o resultad é esse porque tem dois níveis de array, depois eu vou selecionar
o primeiro nível, depois o 0, 0 e o que tem dentro do array 0
 
 */