function sum(a,b) {
  return a + b;
}

const summationOf =(value) => {
  if(value === '') {
    throw Error('summationOf deve receber um número.');
  }
  const number = Number(value); // converte o value em number
  if(Number.isNaN(number)) { // isNaN informa se o valor convertido é um número ou não.
    throw Error('summationOf deve receber apenas números.')
  }
  let sum = 0;
  for(let index = 0; index <= value; index += 1){
    sum += index;
  }
  return sum
};

summationOf(3)

module.exports = {sum, summationOf}; // disponibiliza a função sum para que ela possa ser exportada.
