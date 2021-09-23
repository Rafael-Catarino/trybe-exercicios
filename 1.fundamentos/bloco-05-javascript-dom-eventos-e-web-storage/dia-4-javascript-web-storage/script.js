/*Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela. */

window.onload = function() {
  const select = document.querySelector('select');
  select.addEventListener('change', function() {
    document.body.style.backgroundColor = select.value;

    localStorage.setItem('background-color', select.value);
  });


  const colorFont = document.getElementById('colorFont');
  colorFont.addEventListener('change', function() {
    console.log('teste')
    document.body.style.color = colorFont.value

    localStorage.setItem('fontColor', colorFont.value);
  });

  const numberSize = document.querySelector('input[name = "tamanhoFonte"]');
  numberSize.addEventListener('change',function() {
    const paragraph = document.querySelector('p');
    paragraph.style.fontSize = `${numberSize.value}px`;

    localStorage.setItem('fontSize', `${numberSize.value}px`)
  });

  const familyFont = document.querySelector('#familyFont');
  familyFont.addEventListener('change', function() {
    console.log('test');
    const paragraph = document.querySelector('p');
    paragraph.style.fontFamily = familyFont.value;

    localStorage.setItem('familyFonte', familyFont.value);
  });

  const heightLine = document.querySelector('#height-line');
  heightLine.addEventListener('change', function() {
  const paragraph = document.querySelector('p');
  paragraph.style.lineHeight = heightLine.value;

  localStorage.setItem('heitght-Line', heightLine.value);
});

  let savedColorBackground = localStorage.getItem('background-color');
  document.body.style.backgroundColor = savedColorBackground;

  let savedFontColor = localStorage.getItem('fontColor');
  document.body.style.color = savedFontColor;

  let savedFontSize = localStorage.getItem('fontSize');
  document.querySelector('p').style.fontSize = savedFontSize;

  let savedFamilyFonte = localStorage.getItem('familyFonte');
  const p = document.querySelector('p');
  p.style.fontFamily = savedFamilyFonte;

  let savedHeightLine = localStorage.getItem('height-Line');
  const pa = document.querySelector('p');
  pa.style.lineHeight = savedHeightLine;
}