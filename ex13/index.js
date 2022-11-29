let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  
  // Only change code above this line
  
  console.log(foods);
  
  /*é possível passar o valor dentro de um colchete, mas nesse caso, seria
  usado caso eu fosse passar o valor por uma variável ou se a palavra tivesse
  espaço em branco 
  
  Exemplo
  
  const eyes = 'eye color';
  
  tekkenCharacter[eyes] = 'brown';
  tekkenCharacter['hair color'] = 'dyed orange';
  tekkenCharacter.origin = 'South Korea';
  {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true,
    origin: 'South Korea',
    'hair color': 'dyed orange',
    'eye color': 'brown'
  };
  */