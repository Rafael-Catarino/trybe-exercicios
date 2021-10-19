// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function countCharacter(param) {
  biggerName = '';
  for (index of param) {
    if (index.length > biggerName.length){
      biggerName = index;
    }
  }
  console.log(biggerName);
}

countCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
