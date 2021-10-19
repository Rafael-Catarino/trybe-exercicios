//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sumNumber (param) {
  sum = 0;
  for (let index = 1; index <= param; index += 1) {
    sum += index;
  }
  console.log(sum);
}

sumNumber(7);
