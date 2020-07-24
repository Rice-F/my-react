import React from 'react';

export class Clock extends React.Component{

  // 组件状态
  state = {
    date: new Date()
  }

  // 组件挂载之后
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  compoentWillUnmount () {
    clearInterval(this.timer);
  }

  render(){
    return (
      <div>
        {/* 输出当前组件某个状态的值 */}
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
} 