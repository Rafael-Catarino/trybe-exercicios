/*Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

const num1 =9;
const num2 =10;
const num3 =8;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + "é o maior número.");
}
else if (num2 > num1 && num2 > num3) {
  console.log(num2 + "é o maior número.");
}
else if (num3 > num1 && num3 > num2) {
  console.log(num3 + "é o maior número.");
}