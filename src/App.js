import React from 'react';
import logo from './logo.svg';
import './App.css';
let jsx = <p>hello,react</p>
 
function formatName (user) {
  return `${user.firstName},${user.lastName}`
}

function App() {
  const NAME = 'jerry'
  const USER = {firstName: 'tom', lastName: 'jerry'}
  return (
    <div className="App">
      {/* 表达式 */}
      <h1>{NAME}</h1>
      <h2>{formatName(USER)}</h2>

      {/* 属性 */}
      <img src={logo} style={{width: '200px'}} alt="" />

      {/* jsx也是表达式 */}
      {jsx}
    </div>
  );
}

export default App;
