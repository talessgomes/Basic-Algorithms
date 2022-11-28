function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) === -1) {
        return false;
    } else {
        return true;
    }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*Na verifição, o if está vendo qual é a posição do mushrooms em relação ao
index. Descobrindo que ele é -1, eu vou falar que se o valor do elemento for
igual a -1, o retorno será falso, porque ele não está dentro do array. */