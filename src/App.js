import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!!</h1>
      <h3>Things I need to do:</h3>
        <p>
            <ul>
              <li>Learn React</li>
              <li>Climb Mt. Everest</li>
              <li>Run a Marathon</li>
              <li>Feed the dogs</li>
            </ul>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
