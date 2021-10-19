/*Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo.
 */

const oddsAndEvens = [9, 100, 40, 1, 30, 25, 89, 73, 62, -3];

// Seu código aqui.
const ordeOddAndEvens = array => {
  const sortedOddAndEvens = array.sort((a, b) => a - b);
  return sortedOddAndEvens;
}

console.log(`Os números ${ordeOddAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente !`); // será necessário alterar essa linha 😉 




