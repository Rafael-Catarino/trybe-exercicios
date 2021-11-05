import React from "react";

/* 
1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
*/

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      estadoFavorito: '',
      palavraChave: '',
      estãoIndo: 'Fase'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div>
        <h1>Meu formulário</h1>
      <form>
        <label>
          Email:
          <input name="email" type="email"
          value={ this.state.email } onChange={ this.handleChange } /> 
        </label>

        <label>
          Nome:
          <input name="nome" type="text" value={ this.state.nome } onChange={ this.handleChange } />
        </label>

        <label>Qual o seu Estado favorito do Brasil?
          <textarea name="estadoFavorito" value={ this.state.estadoFavorito } onChange={ this.handleChange } />
        </label>
        
        <label>
          Estão indo:
          <input name="estãoIndo" type="checkbox" value={this.state.estãoIndo} onChange={this.handleChange} />
        </label>

        <label>
          Escolha sua falavra chave favorita
          <select
            name="palavraChave"
            value={ this.state.palavraChave }
            onChange={ this.handleChange }
          >
            <option value="Componete">Componente</option>
            <option value="Estado">Estado</option>
            <option value="Evento">Evento</option>
            <option value="Props">Props</option>
          </select>
        </label>
        <fieldset>
          <legent>Incluir seu documento</legent>
          <input type="file"/>
        </fieldset>
      </form>
      </div>
    )
  }
}

export default Form;