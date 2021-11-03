import React from 'react';
import './App.css';

/* Para fixar
1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() . */

/* exercicio 1 a 2. */

     /* function myButton() {
      console.log('Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!')
    }
    function Button1() {
      console.log('Apertou no butão 1')
    }
    function Button2() {
      console.log('Apertou no butão 2')
    }
    function Button3() {
      console.log('Apertou no butão 3')
    } 

class App extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={ myButton }>Teste Botão</button>
        <button onClick={ Button1 }>Botão 1</button>
        <button onClick={ Button2 }>Botão 2</button>
        <button onClick={ Button3 }>Botão 3</button>
      </div>
    ) 
  }
} */



/* 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
4 - Garanta acesso ao objeto this na função que você declarou. */

/* exercicios 3 e 4 */
/* class App extends React.Component {
  constructor() {
    super();

    this.myButton=this.myButton.bind(this);
    this.Button1=this.Button1.bind(this);
    this.Button2=this.Button2.bind(this);
    this.Button3=this.Button3.bind(this);
  }


  myButton() {
    console.log(this);
    console.log('Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!');
  }
  Button1() {
    console.log(this);
    console.log('Apertou no butão 1')
  }
  Button2() {
    console.log(this);
    console.log('Apertou no butão 2')
  }
  Button3() {
    console.log(this);
    console.log('Apertou no butão 3')
  }

  render() {
    console.log(this);
    return (
      <div>
        <button onClick={ this.myButton }>Teste Botão</button>
        <button onClick={ this.Button1 }>Botão 1</button>
        <button onClick={ this.Button2 }>Botão 2</button>
        <button onClick={ this.Button3 }>Botão 3</button>
      </div>
    ) 
  }
  
} */


/* 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado! */

/* exercicios 5, 6 e 7 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques:0,
      numeroDeCliquesBtn1:0,
      numeroDeCliquesBtn2:0,
      numeroDeCliquesBtn3:0,
    }

    this.myButton=this.myButton.bind(this);
    this.Button1=this.Button1.bind(this);
    this.Button2=this.Button2.bind(this);
    this.Button3=this.Button3.bind(this);
  }


  myButton() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques:estadoAnterior.numeroDeCliques + 1
    }))
    console.log(this);
    console.log('Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!');
  }
  Button1() {
    this.setState((estadoAnterior, _prop) => ({
      numeroDeCliquesBtn1: estadoAnterior.numeroDeCliquesBtn1 +1
    }))
    console.log(this);
    console.log('Apertou no butão 1')
  }
  Button2() {
    this.setState((valorAnterior) => ({
      numeroDeCliquesBtn2: valorAnterior.numeroDeCliquesBtn2 + 1
    }))
    console.log(this);
    console.log('Apertou no butão 2')
  }
  Button3() {
    this.setState((valorAnterior) => ({
      numeroDeCliquesBtn3: valorAnterior.numeroDeCliquesBtn3 + 1
    }))
    console.log(this);
    console.log('Apertou no butão 3')
  }

  render() {
    console.log(this);
    return (
      <div>
        <button onClick={ this.myButton }>{this.state.numeroDeCliques}</button>
        <button onClick={ this.Button1 }>{this.state.numeroDeCliquesBtn1}</button>
        <button onClick={ this.Button2 }>{this.state.numeroDeCliquesBtn2}</button>
        <button onClick={ this.Button3 }>{this.state.numeroDeCliquesBtn3}</button>
      </div>
    ) 
  }
  
} 

export default App;
