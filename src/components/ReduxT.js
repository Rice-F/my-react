import React from 'react';
// 引入store
// import store from '../store'
// 
import {connect} from 'react-redux';

// 映射函数
const mapStateToProps = state => ({num: state});
// 简化store.dispatch的操作
const mapDispatchToProps = {
  add: () => ({type: 'add'}),
  minus: () => ({type: 'minus'})
}

class ReduxTest extends React.Component{
  render () {
    const {num, add, minus} = this.props
    return (
      <div>
        {/* 获取状态 */}
        <p>{num}</p>

        {/* 通过dispatch派发action */}
        <div>
          <button onClick={minus}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    )
  }
}

// connect是个工厂函数，传递配置项，返回一个高阶组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTest)