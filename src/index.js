import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// 添加store.subscribe方法，在该方法中再次执行ReactDOM的渲染，实现对store的订阅
// store.subscribe(() => {
//   ReactDOM.render(
//     // <React.StrictMode>
//       <App />,
//     // </React.StrictMode>,
//     document.getElementById('root')
//   );
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();