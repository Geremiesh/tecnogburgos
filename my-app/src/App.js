import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'TecnoG';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bienvenidos a la pagina!. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </header>
    </div>
  );
}

export default App;
