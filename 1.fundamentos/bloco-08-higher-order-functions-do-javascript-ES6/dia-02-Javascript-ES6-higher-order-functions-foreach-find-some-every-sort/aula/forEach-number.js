const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Imprime as letras do array letters ultilizando uma estrutura FOR.
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// forEach = HOF
numbers.forEach((number, index, array) => {
  console.log(`${index}: ${number} -> ${array}`);
});

numbers.forEach((number) => {
  console.log(`${number}`);
});