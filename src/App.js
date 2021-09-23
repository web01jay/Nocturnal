import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">      
      <main className="App-header hidden">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
