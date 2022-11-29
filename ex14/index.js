let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42 // online vai ter que ser 45
    }
};

// Only change code below this line
userActivity.data.online = 45; //atualizando online para 45
// Only change code above this line

console.log(userActivity);

/*
 
Exemplo
 
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
 
nestedObject.data.onlineStatus.busy = 10;
 
 
console.log(nestedObject);
 
Neste exemplo, eu vou acessar a informação busy, que está dentro de nesteObject,
data, onlineStatus, ai eu vou ter acesso a propriedade busy e vou atualizar
o valor de 8 para 80 
 
 
 */