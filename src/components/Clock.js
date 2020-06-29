import React from 'react';

export class Clock extends React.Component{
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
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
} 