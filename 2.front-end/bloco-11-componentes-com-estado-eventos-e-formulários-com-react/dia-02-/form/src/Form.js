import React from "react";

/* 
1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
*/

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      estadoFavorito: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    return(
      <div>
        <h1>Meu formulário</h1>
      <form>
        <label>
          Email:
          <input name="email" type="email"
          value={ this.state.email } onChange={ this.handleInputChange } /> 
        </label>
        <label>
          Nome:
          <input name="nome" type="text" />
        </label>
        <label>Qual o seu Estado favorito do Brasil?
          <textarea name="estadoFavorito" />
        </label>
      </form>
      </div>
    )
  }
}

export default Form;