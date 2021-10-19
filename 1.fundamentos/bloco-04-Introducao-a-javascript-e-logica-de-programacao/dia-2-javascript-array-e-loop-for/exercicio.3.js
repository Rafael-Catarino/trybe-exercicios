let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Calcule e imprima a média aritmética dos valores contidos no array;
let adicao = 0;
let cont =0;
for (let index = 0; index < numbers.length; index += 1) {
  adicao += numbers[index];
  cont += 1;
}
let media = adicao / cont;
console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20){
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20")
}
