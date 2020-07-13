import React from 'react';
// import logo from './logo.svg';
import './App.css';
// 组件导入
// import {Welcome1, Welcome2}  from './components/CompType'
// import {Clock} from './components/Clock'
// import {StateTest} from './components/StateTest'
// import {CartSample} from './components/CartSample'
// import {Lifecycle} from './components/Lifecycle'
// import {AntdTest} from './components/AntdTest'
// import {CommentList} from './components/CommentList'
// import {Hoc} from './components/Hoc'
// import {Composition} from './components/Composition'

// let jsx = <p>hello,react</p>
 
// function formatName (user) {
//   return `${user.firstName},${user.lastName}`
// }
class App extends React.Component {
  // const NAME = 'jerry'
  // const USER = {firstName: 'tom', lastName: 'jerry'}

  constructor (props) {
    // console.log('App constructor')
    super(props);
    this.state = {
      lifeProp: 'this is life prop'
    }
  }

  componentDidMount () {
    // console.log('App didmount')
    // this.setState({lifeProp: 'a new prop'})
    // setTimeout(() => {
    //   this.setState({lifeProp: ''})
    // }, 2000)
  }

  render () {
    // console.log('App render')
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
        {/* <CartSample title="this is cartsample title"></CartSample> */}
  
        {/* 生命周期 */}
        {/* {this.state.lifeProp && <Lifecycle lifeProp={this.state.lifeProp}></Lifecycle>} */}

        {/* Antd */}
        {/* <AntdTest></AntdTest> */}

        {/* 容器组件 */}
        {/* <CommentList></CommentList> */}

        {/* 高阶组件 */}
        {/* <Hoc></Hoc> */}

        {/* 复合组件 */}
        {/* <Composition></Composition> */}
      </div>
    );
  }

}

export default App;
