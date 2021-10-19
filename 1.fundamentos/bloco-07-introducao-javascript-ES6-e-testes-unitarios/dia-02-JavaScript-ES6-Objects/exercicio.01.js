/*Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const cliente = {
}

function object (param, key, value) { 
  param[key] = value;
  console.log(param);
}

object(cliente, 'nome', 'Rafael');
object(cliente, 'sobrenome', 'Catarino');
object(cliente, 'idade', '27 anos');

