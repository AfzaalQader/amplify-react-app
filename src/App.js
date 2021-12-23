import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
    .then((res) => res.json())
    .then((result) => {
      console.log("Result:::::::::::::::::::: ", result)
    })
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Hello Amplify React app
        </a>
      </header>
    </div>
  );
}

export default App;
