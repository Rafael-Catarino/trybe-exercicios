/*Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let result = '';
  let maxLength = 0
  for(const word of wordArray) {
    if (word.length > maxLength){
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}


console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
