import React from 'react';

export class Lifecycle extends React.Component {
  constructor (props) {
    super(props)
    // 常用于初始化
    console.log('1. 组件构造函数');
  }

  // 此时可访问状态和属性，可进行api调用
  componentWillMount () {
    console.log('2. 组件即将挂载');
  }

  // 可进行状态更新
  componentDidMount () {
    console.log('3. 组件完成挂载');
  }

  // 父组件传递的属性有变化，做对应响应
  componentWillReceiveProps () {
    console.log('4. 组件将要接收属性传递');
  }

  // 组件是否需要更新，需要返回布尔值结果，根据布尔值结果决定是否更新
  shouldComponentUpdate () {
    console.log('5. 组件是否需要更新？');
    return true;
  }

  componentWillUpdate () {
    console.log('6. 组件即将更新');
  }

  componentDidUpdate () {
    console.log('7. 组件完成更新');
  }

  componentWillUnmount () {
    console.log('8. 组件即将卸载');
  }

  render () {
    console.log('组件render');
    return (
      <div>生命周期</div>
    )
  }
}