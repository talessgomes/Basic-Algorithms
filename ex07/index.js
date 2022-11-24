function forecast(arr) {
    // Only change code below this line
    let arr2 = arr.slice(2, 4);

    return arr2; //return arr.slice(2,4); outra forma de resolver
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


/* Slice vai criar uma cópia do array, determinando o lugar, e a quantidade
que ele vai pegar, não vai ser determinada pelo index. Tive que criar uma nova
variável e passei ela como retorno */

/*  Exemplo
 
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
 
let todaysWeather = weatherConditions.slice(1, 3); // ['snow', 'sleet']
 
vou pegar um array e irei criar uma cópia dele na nova variável
 */