import React from 'react';

class Pokemom extends React.Component {
  render() {
    const pokemonsData = this.props.dados;
    return pokemonsData.map((pokemon) => {
      return (
        <section className='pokemon'>
          <div className='data'>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
            <p>Peso Médio: {Object.values(pokemon.averageWeight)}</p>
          </div>
          <div className='imagem'>
            <img src={pokemon.image} alt='' />
          </div>
        </section>
      );
    }) 
  }
}

export default Pokemom;