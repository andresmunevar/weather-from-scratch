import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Nav } from './components/Nav.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Felipe Munevar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nav />
    </div>
  );
}

export default App;
