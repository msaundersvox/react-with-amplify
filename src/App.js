import React from 'react';
import logo from './logo.svg';
import './App.css';
// You attempted to import ../README.md which falls outside of the project src/ 
// directory. Relative imports outside of src/ are not supported.
// You can either move it inside src/, or add a symlink to it from project's 
// node_modules/.
import README from './README.md';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {README}
        </p>
      </header>
    </div>
  );
}

export default App;
