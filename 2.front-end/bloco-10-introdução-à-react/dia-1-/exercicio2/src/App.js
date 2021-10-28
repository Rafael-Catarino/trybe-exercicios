import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar'];

function App() {
  return (
    <ol>{ tarefas.map(tarefa => Task(tarefa) )}</ol>
    
  );
}

export default App;
