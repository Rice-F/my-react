import React from 'react';

export class StateTest extends React.Component{
  state = {
    count: 1
  }

  // 组件挂载之后
  componentDidMount () {
    // 1. 直接修改state数据无效，必须使用setState
    // this.state.count += 10
  
    // 2. setState批量执行
    // 写3遍同样的对count的操作，setState只会执行一次，setState会进行队列排列，对方法进行整合，相同的操作会被合并
    // this.setState(obj, cb)
    // 这里执行完毕显示的值为11
    this.setState({count: this.state.count + 10});
    this.setState({count: this.state.count + 10});
    this.setState({count: this.state.count + 10});

    // 3.如果前后的值是有关联的，比如后面的值依赖于之前的值，可以用函数形式写，prevState可以获取到已经被操作之后的值
    // this.setState(fn, cb)
    // 这里执行完毕显示的值为41
    this.setState(prevState => ({
      count: prevState.count + 10
    }))
    this.setState(prevState => ({
      count: prevState.count + 10
    })) 
    this.setState(prevState => ({
      count: prevState.count + 10
    }))
  }

  render(){
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
} 