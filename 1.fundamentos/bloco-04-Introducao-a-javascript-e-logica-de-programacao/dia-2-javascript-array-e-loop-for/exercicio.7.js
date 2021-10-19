//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let num = 0;
let numbers = [];
for (let cont = 0; cont < 25; cont += 1) {
  num = Math.random();
  num = Math.round(num * 10);
  numbers.push(num);
}
console.log(numbers);

console.log('------------------');

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let result = [];
let divided = 0;
for (number of numbers) {
  divided = number/2;
  result.push(divided);
}
console.log(result);
