const {sum, summationOf} = require('./script');

describe('Function sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('adds -5 + (-39) to equal -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });

  it('adds 0 + (-10) to equal -10', () => {
    expect(sum(0, -10)).toBe(-10); // .toBe === Matcher
  });

  it('adds 5.1 + 6.65 to equal 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65); // .toBeCloseTo === Matcher que se aprocima de um número flutuante.
  });
});

describe('Function summationOf', () => {
  test('Espera que a função summationOf exista', () => {
    expect(typeof(summationOf)).toBe('function')
  });

  test('Espera que o somatório de 1 seja seja igual a 1', () => {
    expect(summationOf(1)).toBe(1)
  });

  test('Espera que o somatório de 3 seja seja igual a 6', () => {
    expect(summationOf(3)).toBe(6)
  });

  test('Espera que o somatório de 5 seja seja igual a 15', () => {
    expect(summationOf(5)).toBe(15)
  });
});