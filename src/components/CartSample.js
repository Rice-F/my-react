import React from 'react';

export class CartSample extends React.Component{
  // 状态state初始化一般放在构造器中
  constructor (props) {
    super(props);
    this.state = {
      goods: [
        {id: 1, name: 'web'},
        {id: 2, name: 'ios'},
        {id: 3, name: 'pc'},
        {id: 4, name: 'mobile'},
      ],
      text: ''
    }
  }

  textChange = (evt) => {
    this.setState({text: evt.target.value})
  }

  addGood = () => {
    this.setState(prevState => {
      // 返回一个全新的要更新的数组，而不是在原数组上操作数据
      return {
        goods: [...this.state.goods, {id: prevState.goods.length + 1, name: 'vue'}]
      }
    })
  }

  render(){
    // let title = this.props.title ? <h5>this.props.title</h5> : null
    return (
      <div>
        {/* 条件渲染 */}
        {this.props.title && <h5>{this.props.title}</h5>}

        {/* 列表渲染 */}
        <div>
          <input type="text" value={this.state.text} onChange={this.textChange}/>
          <button onClick={this.addGood}>添加</button>
        </div>
        <ul>
          {this.state.goods.map(good => <li key={good.id}>{good.name}</li>)}
        </ul>
      </div>
    )
  }
}