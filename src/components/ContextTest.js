import React, {useContext} from 'react';

// 创建上下文
// 这个功能概念可理解为vue中的provide和inject
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

function GrandParent () {
  return (
    <div>GrandParent</div>
  )
}

function Parent () {
  return (
    <div>Parent</div>
  )
}

// 跨组件通信方法1：利用<consumer></consumer>组件
function Child1 (props) {
  return ( 
    <div>child1: {props.name}</div>
  )
}

// 跨组件通信2：使用hook
function Child2 () {
  const ctx = useContext(MyContext)
  return (
    <div>child2: {ctx.name}</div>
  )
}

// 跨组件通信3：class指定静态contextType
class Child3 extends React.Component {
  // 声明一个静态属性
  // 通过固定变量名this.context获取
  static contextType = MyContext
  render () {
    return (
      <div>Child3: {this.context.name}</div>
    )
  }
}

export default function ContextTest () {
  return (
    <div>
      <Provider value={{name: 'asher'}}>

        {/* <GrandParent>
          <Parent>
            <Child1></Child1>
          </Parent>
        </GrandParent> */}
 
        {/* 跨组件通信方法1 */}
        <Consumer>
          {val => <Child1 {...val}></Child1>}
        </Consumer>

        {/* 跨组件通信方法2 */}
        <Child2></Child2>

        {/* 跨组件通信方法3 */}
        <Child3></Child3>
      </Provider>
    </div>
  )
}