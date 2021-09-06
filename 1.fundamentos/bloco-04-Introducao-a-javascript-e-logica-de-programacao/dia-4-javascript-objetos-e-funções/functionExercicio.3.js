// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function checkMinor (param) {
  let minor = 0;
  let indexMinor = 0; 
  for (index in param) {
    if (index === 0) {
      minor = param[index];
      indexMinor = index;
    }
    else if (param[index] < minor) {
      minor = param[index];
      indexMinor = index;
    }
  }
  return "O menor número é: " + minor + " e o seu índice é: " + indexMinor + ".";
}

console.log(checkMinor([2, 4, 6, 7, 10, 0, -3]));
