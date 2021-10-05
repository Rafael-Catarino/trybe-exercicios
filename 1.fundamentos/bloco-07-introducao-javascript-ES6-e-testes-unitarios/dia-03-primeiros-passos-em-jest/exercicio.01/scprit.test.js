const sum = require('./script');


describe('Function sum', () => {
  //Teste se o retorno de sum(4, 5) é 9
  it('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  //Teste se o retorno de sum(0, 0) é 0
  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  //Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)

  //Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it ('adds 4 + "5" to equal "parameters must be numbers"', () => {
    expect(sum(4, "5").toBe('parameters must be numbers'));
  }) 
});
