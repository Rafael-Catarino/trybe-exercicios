/* 
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ; 
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
*/

// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomar café!!' 

const night = () => 'Partiu dormir!!'

const doingThings = (func) => {
  if(func === wakeUp) {
    return 'Acordando!!'
  } else if (func === drinkCoffee) {
    return 'Bora tomar café!!'
  } else {
    return 'Partiu dormir!!'
  }
}



console.log(doingThings(wakeUp));
console.log(doingThings(drinkCoffee));
console.log(doingThings(night));

console.log(wakeUp());
console.log(drinkCoffee());
console.log(night());



// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!