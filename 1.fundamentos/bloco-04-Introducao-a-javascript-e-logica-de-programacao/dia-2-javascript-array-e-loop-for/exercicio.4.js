let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let number = 0;
for(let cont = 0; cont < numbers.length; cont += 1) {
  if(number < numbers[cont]){
    number = numbers[cont];
  }
  else{
    number = number
  }
}

console.log(number);
