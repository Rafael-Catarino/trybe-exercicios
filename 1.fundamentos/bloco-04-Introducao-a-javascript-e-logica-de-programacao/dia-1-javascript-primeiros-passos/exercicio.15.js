/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if.*/

const num1 = 7;
const num2 = 5;
const num3 = 3;

if (num1 % 2 != 0 && num2 % 2 === 0 && num3 % 2 ===0 || num1 % 2 === 0 && num2 % 2 != 0 && num3 % 2 ===0 || num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 !=0) {
    console.log("True");
}
else {
    console.log("False");
}
