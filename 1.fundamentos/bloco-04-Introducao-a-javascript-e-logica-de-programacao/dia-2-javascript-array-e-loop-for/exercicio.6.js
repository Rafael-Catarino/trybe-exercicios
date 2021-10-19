let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 0;
for (let cont = 0; cont < numbers.length; cont += 1) {
  if (numbers[cont] === numbers[0]) {
    menor = numbers[cont];
  }
  else if(menor > numbers[cont]) {
    menor = numbers[cont];
  }
}

console.log(menor)
