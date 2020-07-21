import React from 'react';
// import store from '../store';
import {connect} from 'react-redux';
import {add, minus, asyncAdd} from '../store/count.redux'

// 映射函数
const mapStateToProps = state => ({num: state.counter});
// const mapDispatchToProps = {
//   add: () => ({type: 'add'}),
//   minus: () => ({type: 'minus'}),
//   // asyncAdd方法return一个方法
//   asyncAdd: () => dispatch => {
//     // 异步操作
//     setTimeout(()=> {
//       dispatch({type: 'add'})
//     },1500)
//   }
// }

// count.redux之后
const mapDispatchToProps = {add, minus, asyncAdd}

// function写法：将props解构出来
// function ReduxTest ({num, add, minus}) {
//   return (
//     <div>
//       <p>{num}</p>
//       <div>
//         <button onClick={minus}>-</button>
//         <button onClick={add}>+</button>
//       </div>
//     </div>
//   )
// }

// // connect是个工厂函数，传递配置项，返回一个高阶组件
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReduxTest)

// 装饰器写法：
@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component{
  render () {
    const {num, add, minus, asyncAdd} = this.props
    return (
      <div>
        <p>{num}</p>
        <div>
          <button onClick={minus}>-</button>
          <button onClick={add}>+</button>
          <button onClick={asyncAdd}>async +</button>
        </div>
      </div>
    )
  }
}

export default ReduxTest