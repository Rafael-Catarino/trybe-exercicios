//1- Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
const currentHour = 21;

//2- Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
let menssage = "";

//3- Implemente condicionais para que:
//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
if (currentHour > 22) {
  menssage = "Não deveríamos comer nada, é hora de dormir";
}
//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
else if (currentHour >= 18 && currentHour < 22) {
  menssage = "Rango da noite, vamos jantar :D";
}

//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
else if (currentHour >= 14 && currentHour < 18) {
  menssage = "Vamos fazer um bolo pro café da tarde?";
}

//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
else if (currentHour >= 11 && currentHour < 14) {
  menssage = "Hora do almoço!!!";
}

//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
else if (currentHour >= 4 && currentHour < 11) {
  menssage = "Hmmm, cheiro de café recém passado";
}

//4- Agora imprima a variável message fora das suas condições.
console.log(menssage);
