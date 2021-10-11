const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  // escreva seu código aqui
  return names
    .reduce((accumulation, word) => accumulation + word
    .split('').reduce((acumulator, letter) => {
      if (letter.toUpperCase() === 'A') return acumulator + 1;
      return acumulator;
    }, 0), 0);
}

console.log(containsA());