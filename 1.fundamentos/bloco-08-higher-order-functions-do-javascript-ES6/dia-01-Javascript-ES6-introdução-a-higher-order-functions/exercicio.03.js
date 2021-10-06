/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

function comparingNumber (num, randomNumber) {
  const result = randomNumber();
  if (num === result) {
    return 'Parabéns você ganho!!';
  }
  if (num !== result){
    return 'Tente novamente';
  }
}

function randomNumber () {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const result = Math.floor(Math.random() * (max) + min); 
  return result;
}

console.log(comparingNumber(2, randomNumber));

