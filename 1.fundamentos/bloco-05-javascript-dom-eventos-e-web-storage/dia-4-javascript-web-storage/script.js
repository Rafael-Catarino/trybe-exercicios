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

  const numberSize = document.querySelector('input[name = "font-size"]');
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
  })

  let savedColorBackground = localStorage.getItem('background-color');
  document.body.style.backgroundColor = savedColorBackground;

  let savedFontColor = localStorage.getItem('fontColor');
  document.body.style.color = savedFontColor;

  let savedFontSize = localStorage.getItem('fontSize');
  document.querySelector('p').style.fontSize = savedFontSize;

  let savedFamilyFonte = localStorage.getItem('familyFonte');
  const p = document.querySelector('p');
  p.style.fontFamily = savedFamilyFonte;
}