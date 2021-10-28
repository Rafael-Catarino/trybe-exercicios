import './App.css';
import Pokemom from './Pokemon';
import data from './data';

function App() {
  return (
  <main className='card-pokemon'>
    <Pokemom dados={data}/>
  </main>);
}

export default App;
