const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

/* 1 - Dada uma matriz, transforme em um array. */
function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acumulador, array) => acumulador.concat(array), []);
}

console.log(flatten());

