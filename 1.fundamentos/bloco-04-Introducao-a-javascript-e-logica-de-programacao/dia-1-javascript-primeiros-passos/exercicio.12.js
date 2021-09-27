/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

const xadrez = "BisPo";
let peca = xadrez.toLowerCase()

switch (peca) {
  case "pião":
    console.log("Anda uma casa a frente e come em diagonal.");
    break;

  case "torre":
    console.log("Anda e come para frente, para traz e para os lados (direito e esquerdo).");
    break;

  case "bispo":
    console.log("Anda e come nas diagonais.");
    break;

  case "cavalo":
    console.log("Anda e como em L.");
    break;

  case "rainha":
    console.log("Anda para todos os lados varias casas.");
    break;

  case "rei":
    console.log("Anda para todos os lados uma casa.");
    break;

    default:
    console.log("Valor não indentificado");
    break;
}

console.log(xadrez)
