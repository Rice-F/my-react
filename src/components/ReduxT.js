import React from 'react';
// connect函数连接 react-redux 和 redux
// connect是个工厂函数，传递配置项，返回一个高阶组件
import {connect} from 'react-redux';
// 将action creator导入
import {add, minus, asyncAdd} from '../store/count.redux'

// 映射函数
const mapStateToProps = state => ({num: state});
// 简化store.dispatch的操作
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

// 装饰器写法：
@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component{
  render () {
    const {num, add, minus, asyncAdd} = this.props
    return (
      <div>
        {/* 获取状态 */}
        <p>{num}</p>

        {/* 通过dispatch派发action */}
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