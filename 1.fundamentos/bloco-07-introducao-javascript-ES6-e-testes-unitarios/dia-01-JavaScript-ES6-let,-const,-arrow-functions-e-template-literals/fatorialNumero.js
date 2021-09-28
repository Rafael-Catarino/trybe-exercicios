/*Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */


const fatorial = (num) => {
  let resultFatorial = 1;
  let cont = num;
  for(let index = 1; index <= num; index += 1){
    resultFatorial = resultFatorial * cont;
    cont = cont - 1;
  }
  return resultFatorial;
}

console.log(fatorial(5));

// Outra forma de fazer;

const fatoriala = (num) => {
  let resultFatorial = 1;
  for(let index = 1; index <= num; index += 1){
    resultFatorial *= index
  }
  return resultFatorial;
}

console.log(fatoriala(5));