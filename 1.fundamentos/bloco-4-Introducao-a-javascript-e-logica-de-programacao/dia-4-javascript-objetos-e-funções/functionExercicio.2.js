// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function checkBigger(param) {
  let maior = 0;
  let indexBigger = 0;
  for (let index = 0; index < param.length; index +=1) {
    if (param [index] > maior) {
      maior = param[index];
      indexBigger = index
    }
  }
  return "O maior número é: " + maior + " e o seu índice é: " + indexBigger + "."
}

console.log(checkBigger([2, 3, 6, 7, 10, 1]))