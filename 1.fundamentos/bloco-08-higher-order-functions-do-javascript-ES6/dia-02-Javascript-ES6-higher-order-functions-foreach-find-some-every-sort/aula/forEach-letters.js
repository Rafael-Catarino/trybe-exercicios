const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//Imprime as letras do array letters ultilizando uma estrutura FOR.
/* for (let index = 0; index < letters.length; index += 1) {
  console.log(letters[index]);
}
*/
// forEach = HOF
letters.forEach((letter, index, array) => {
  console.log(`${index}: ${letter} -> ${array}`);
});

letters.forEach((letter) => {
  console.log(`${letter}`);
});