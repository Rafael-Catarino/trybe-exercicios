function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>*/


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function imputDate() {
  const days = document.getElementById('days');
  for (let cont = 0; cont < dezDaysList.length; cont += 1) {
    const criandoLi = document.createElement('li');
    if (dezDaysList[cont] === 24 || dezDaysList[cont] === 31) {
      criandoLi.innerText = dezDaysList[cont];
      criandoLi.className = 'day holiday';
    }else if (dezDaysList[cont] === 4 || dezDaysList[cont] === 11 || dezDaysList[cont] === 18) {
      criandoLi.innerText = dezDaysList[cont];
      criandoLi.className = 'day friday';
    }else if (dezDaysList[cont] === 25) {
      criandoLi.innerText = dezDaysList[cont];
      criandoLi.className = 'day friday holiday';
    }else {
      criandoLi.innerText = dezDaysList[cont];
      criandoLi.className = 'day';
    }
    days.appendChild(criandoLi);
  }
}

imputDate()

/*Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".*/

function imputButtonHoliday() {
  const buttonsContainer = document.querySelector('.buttons-container');
  const createButton = document.createElement('button'); 
  createButton.innerText = 'Feriado';
  createButton.id = 'btn-holiday';
  buttonsContainer.appendChild(createButton);
}

imputButtonHoliday();

/*Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/

function imputClickHoliday() {
  const button = document.querySelector('#btn-holiday');
  const days = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const returnColor = 'white';


  button.addEventListener('click',function() {
    for (let cont = 0; cont < days.length; cont += 1) {
      if (days[cont].style.backgroundColor === returnColor) {
        days[cont].style.backgroundColor = backgroundColor;
      } else {
        days[cont].style.backgroundColor = returnColor;
      }
    }
  })
}

imputClickHoliday()

/*Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

function imputButtonFriday() {
  const buttonsContainer = document.querySelector('.buttons-container');
  const createButtons = document.createElement('button');
  createButtons.innerText = 'Sexta-feira';
  createButtons.id = 'btn-friday';
  buttonsContainer.appendChild(createButtons);
}

imputButtonFriday()

/*Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.*/

function imputClickFriday() {
  let clickButtonFriday = document.querySelector('#btn-friday');
  let days = document.querySelectorAll('.friday');
  let text = 'Sextou';
  let x = [4, 11, 18, 25];

  clickButtonFriday.addEventListener('click', function(){
    for (let index = 0; index < days.length; index += 1) {
      if (days[index].innerText !== text) {
        days[index].innerText = text;
      } else {
        days[index].innerText = x[index];
      }
    }
  });
}

imputClickFriday()

/*Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.*/
function mouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeigth = '600';
  });
}

function mouseOut() {
  let days = document.getElementById('days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeigth = '200';
  });
}

mouseOver();
mouseOut();

/*Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

function creationMyTasks(tarefa) {
  const myTasks = document.querySelector('.my-tasks');
  const assignment = document.createElement('span');
  assignment.innerText = tarefa;
  myTasks.appendChild(assignment);
}

creationMyTasks('cosinhar');

/*Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

function creationColor (color) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('div');
  task.className = 'task';
  task.style.backgroundColor = color;
  myTasks.appendChild(task);
}

creationColor('blue');

/*Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.*/

function addColor () {
  const selectColor = document.getElementsByClassName('task selected');
  const clickColor =  document.querySelector('.task');
  clickColor.addEventListener('click', function(event) {
    if (selectColor.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

addColor ();

