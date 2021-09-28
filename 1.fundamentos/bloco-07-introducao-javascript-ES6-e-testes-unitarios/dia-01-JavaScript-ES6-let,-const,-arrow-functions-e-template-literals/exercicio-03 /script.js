const buttonCont = () => {
  const btnCont = document.querySelector('.btn-cont');
  let clickCount = 0 
  btnCont.addEventListener('click', function() {
    console.log('testando')
    clickCount +=  1;
    let paragraph = document.querySelector('#result');
    paragraph.innerHTML = `Tiveram ${clickCount} cliques.`
  });
  
} 

buttonCont()