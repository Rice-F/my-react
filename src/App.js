import React from 'react';
// import logo from './logo.svg';
import './App.css';
// 组件导入
// import {Welcome1, Welcome2}  from './components/CompType'
// import {Clock} from './components/Clock'
// import {StateTest} from './components/StateTest'
import {CartSample} from './components/CartSample'

// let jsx = <p>hello,react</p>
 
// function formatName (user) {
//   return `${user.firstName},${user.lastName}`
// }

function App() {
  // const NAME = 'jerry'
  // const USER = {firstName: 'tom', lastName: 'jerry'}
  return (
    <div className="App">
      {/* 表达式 */}
      {/* <h1>{NAME}</h1> */}
      {/* <h2>{formatName(USER)}</h2> */}

      {/* 属性 */}
      {/* <img src={logo} style={{width: '200px'}} alt="" /> */}

      {/* jsx也是表达式 */}
      {/* {jsx} */}

      {/* 组件使用 */}
      {/* <Welcome1 name="name1"></Welcome1> */}
      {/* <Welcome2 name="name2"></Welcome2> */}

      {/* state状态改变和setState函数 */}
      {/* <Clock></Clock> */}

      {/* state与setState的使用tip */}
      {/* <StateTest></StateTest> */}

      {/* 条件渲染 */}
      <CartSample title="cart"></CartSample>
    </div>
  );
}

export default App;
