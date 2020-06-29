import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Welcome1} from './components/CompType'

function App() {
  let name = 'jerry';
  let o1 = {
    firstName: 'Asher',
    lastName: 'aa'
  }
  let jsx = <h4>this is jsx 表达式</h4>
  function formatName (user) {
    return `${user.firstName} - ${user.lastName}`
  }
  return (
    <div className="App">
      <p>{name}</p>
      <h5>{formatName(o1)}</h5>
      {jsx}
      {/* 使用其他组件 */}
      <Welcome1></Welcome1>
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
